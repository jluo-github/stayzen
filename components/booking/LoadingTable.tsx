import { Skeleton } from "../ui/skeleton";

const LoadingTable = ({ rows }: { rows?: number }) => {
  const tableRows = Array.from({ length: rows || 3 }, (_, i) => {
    return (
      <div className='mt-12' key={i}>
        <Skeleton className='w-full h-10 rounded-lg' />
      </div>
    );
  });
  return <div>{tableRows}</div>;
};
export default LoadingTable;
