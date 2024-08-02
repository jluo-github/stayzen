"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

type ChartProps = {
  data: {
    date: string;
    count: number;
  }[];
};

const Chart = ({ data }: ChartProps) => {
  return (
    <div className='mt-16  mx-auto mr-12'>
      <h1 className='text-center'>Monthly Bookings</h1>

      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
          }}>
          <XAxis dataKey='date' scale='point' />
          <YAxis allowDecimals={false} />
          <Tooltip />

          <Bar
            dataKey='count'
            fill='#7908fb'
            barSize={75}
            activeBar={<Rectangle fill='pink' stroke='blue' />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
