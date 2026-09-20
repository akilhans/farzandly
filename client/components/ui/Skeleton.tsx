import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className = '', ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-slate-200/80 rounded-xl ${className}`}
      {...props}
    />
  );
}

export function ArticleCardSkeleton() {
  return (
    <div className="card-farzandly p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-24 rounded-lg" />
        <Skeleton className="h-4 w-16 rounded-md" />
      </div>
      <Skeleton className="h-7 w-3/4 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-5/6 rounded-md" />
      </div>
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Skeleton className="h-4 w-20 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="card-farzandly p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-20 rounded-xl" />
        <Skeleton className="h-6 w-16 rounded-lg" />
      </div>
      <Skeleton className="h-7 w-4/5 rounded-xl" />
      <Skeleton className="h-4 w-full rounded-md" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-24 rounded-md" />
        <Skeleton className="h-4 w-20 rounded-md" />
      </div>
      <Skeleton className="h-10 w-full rounded-2xl mt-4" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Top banner skeleton */}
      <div className="card-farzandly p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Skeleton className="h-8 w-64 rounded-2xl" />
            <Skeleton className="h-4 w-96 rounded-md" />
          </div>
          <Skeleton className="h-8 w-28 rounded-2xl" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-20 w-full rounded-2xl" />
          <Skeleton className="h-20 w-full rounded-2xl" />
          <Skeleton className="h-20 w-full rounded-2xl" />
        </div>
      </div>

      {/* Hero card skeleton */}
      <Skeleton className="h-40 w-full rounded-3xl" />

      {/* Path nodes skeleton */}
      <div className="card-farzandly p-10 flex flex-col items-center space-y-8">
        <Skeleton className="h-6 w-48 rounded-xl" />
        <div className="space-y-10 flex flex-col items-center">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="h-20 w-20 rounded-full translate-x-12" />
          <Skeleton className="h-20 w-20 rounded-full -translate-x-12" />
          <Skeleton className="h-20 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
