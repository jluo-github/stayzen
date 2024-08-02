import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className='w-full h-20 rounded-lg' />
      </CardHeader>
    </Card>
  );
};

export const StatsLoading = () => {
  return (
    <div className='mt-12 grid sm:grid-cols-2 gap-4 lg:grid-cols-3'>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export const ChartsLoading = () => {
  return <Skeleton className='mt-12 w-full h-[300px] rounded-lg' />;
};
