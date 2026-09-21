import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory store for serverless instance
const memoryEmailUsers = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parol kiritilishi shart' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const displayName = name ? String(name).trim() : cleanEmail.split('@')[0];
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    // Check if user exists in memory map
    if (memoryEmailUsers.has(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: 'Bu email manzili allaqachon ro‘yxatdan o‘tgan' },
        { status: 400 }
      );
    }

    const userId = `email_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const photoUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(displayName)}`;

    const user = {
      _id: userId,
      email: cleanEmail,
      name: displayName,
      photoUrl,
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 25,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: ['ilk-qadam'],
      subscriptionStatus: 'free',
      authProvider: 'email',
    };

    memoryEmailUsers.set(cleanEmail, {
      ...user,
      passwordHash,
    });

    const token = `farzandly_email_${userId}_${Date.now()}`;

    // Forward to backend if external API is configured
    const backendUrl = process.env.BACKEND_API_URL;
    if (backendUrl && backendUrl.startsWith('http')) {
      fetch(`${backendUrl}/auth/email/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: displayName, email: cleanEmail, password }),
      }).catch((err) => console.warn('[Backend Sync Warning]:', err.message));
    }

    return NextResponse.json({
      success: true,
      message: 'Muvaffaqiyatli ro‘yxatdan o‘tdingiz! Xush kelibsiz.',
      data: {
        token,
        user,
      },
    });
  } catch (error: any) {
    console.error('[Email Register Route Error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi' },
      { status: 500 }
    );
  }
}
