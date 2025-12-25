import { useTiersQuery } from "@/services/lotus/endpoints/reward";
import { useState } from "react";

const Dashboard = () => {
  const { isLoading, isFetching, data } = useTiersQuery();
  const [count, setCount] = useState(0);

  console.log("count", count);

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          setCount((c) => c + 1);
        }}
      >
        Click dashboard
      </button>
      {count}
    </div>
  );
};

export default Dashboard;
