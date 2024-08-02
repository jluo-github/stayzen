import { fetchChartsAction } from "@/utils/actions";
import Chart from "./Chart";

const ChartsContainer = async () => {
  const bookings = await fetchChartsAction();
  if (bookings.length === 0) return null;

  return <Chart data={bookings} />;
};
export default ChartsContainer;
