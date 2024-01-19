import type { Metadata } from "next";
// import "../styles/globals.css";
import Layout from "@/components/Dashboard/Layout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Level up your frontend skills with Frontend Arena",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  );
}
