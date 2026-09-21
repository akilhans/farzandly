'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AuthRedirect() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (user || isAuthenticated)) {
      router.replace('/dashboard');
    }
  }, [user, isAuthenticated, isLoading, router]);

  return null;
}
