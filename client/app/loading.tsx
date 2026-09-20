import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <Skeleton className="h-6 w-32 mx-auto rounded-full" />
        <Skeleton className="h-10 w-3/4 mx-auto rounded-2xl" />
        <Skeleton className="h-4 w-full mx-auto rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <Skeleton className="h-64 rounded-3xl" />
        <Skeleton className="h-64 rounded-3xl" />
        <Skeleton className="h-64 rounded-3xl" />
      </div>
    </div>
  );
}
