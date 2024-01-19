import { query } from "@/config/config";
import { QuickStats } from "@/types/types";

const getQuickStats = async (): Promise<QuickStats[]> => {
  const res = await query.get("/dashboard");

  // console.log(res.data);

  return res.data;
};

export const DashboardService = {
  getQuickStats,
};
