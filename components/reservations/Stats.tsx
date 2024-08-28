import StatsCards from "@/components/admin/StatsCard";
import { fetchReservationStatsAction } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";

const Stats = async () => {
  const stats = await fetchReservationStatsAction();

  const { properties, nights, amount } = stats;

  return (
    <div className='mt-12 grid sm:grid-cols-2 gap-4 lg:grid-cols-3'>
      <StatsCards title='properties' value={properties} />
      <StatsCards title='nights' value={nights} />
      <StatsCards title='total' value={formatCurrency(amount)} />
    </div>
  );
};
export default Stats;
