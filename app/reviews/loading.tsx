"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-10 mt-4'>
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </div>
  );
};
export default Loading;

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <div className='ml-4'>
            <Skeleton className='w-[300px] h-5 mb-4' />
            <Skeleton className='w-3/4 h-5 mb-4' />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
