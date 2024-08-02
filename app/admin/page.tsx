import ChartsContainer from "@/components/admin/ChartsContainer";
import StatsContainer from "@/components/admin/StatsContainer";
import { ChartsLoading, StatsLoading } from "@/components/admin/Loading";
import { Suspense } from "react";

const AdminPage = () => {
  return (
    <>
      <Suspense fallback={<StatsLoading />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoading />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
};
export default AdminPage;
