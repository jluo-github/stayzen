import { Card, CardHeader } from "@/components/ui/card";

const StatsCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <Card className='bg-muted'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <h3 className='capitalize '>{title}</h3>
        <span className='text-primary text-5xl font-extrabold dark:text-violet-400'>
          {value}
        </span>
      </CardHeader>
    </Card>
  );
};
export default StatsCard;
