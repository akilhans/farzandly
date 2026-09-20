import React from 'react';
import { Skeleton, CourseCardSkeleton } from '@/components/ui/Skeleton';

export default function KurslarLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <Skeleton className="h-6 w-36 mx-auto rounded-full" />
        <Skeleton className="h-10 w-2/3 mx-auto rounded-2xl" />
        <Skeleton className="h-4 w-full mx-auto rounded-md" />
      </div>

      <div className="flex justify-center gap-2">
        <Skeleton className="h-9 w-24 rounded-2xl" />
        <Skeleton className="h-9 w-28 rounded-2xl" />
        <Skeleton className="h-9 w-24 rounded-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
