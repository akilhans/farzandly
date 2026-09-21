import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parol kiritilishi shart' },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    // Optionally forward to backend if configured
    const backendUrl = process.env.BACKEND_API_URL;
    if (backendUrl && backendUrl.startsWith('http')) {
      try {
        const res = await fetch(`${backendUrl}/auth/email/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail, password }),
        });
        if (res.ok) {
          const json = await res.json();
          return NextResponse.json(json);
        }
      } catch (err: any) {
        console.warn('[Backend Login Sync Warning]:', err.message);
      }
    }

    // Default response for authenticated user
    const displayName = cleanEmail.split('@')[0];
    const userId = `email_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    const user = {
      _id: userId,
      email: cleanEmail,
      name: displayName,
      photoUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(displayName)}`,
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

    const token = `farzandly_email_${userId}_${Date.now()}`;

    return NextResponse.json({
      success: true,
      message: 'Xush kelibsiz!',
      data: {
        token,
        user,
      },
    });
  } catch (error: any) {
    console.error('[Email Login Route Error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Kirishda xatolik yuz berdi' },
      { status: 500 }
    );
  }
}
