"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import DashboardClient from "./DashboardClient";

export default function Page() {
  return <DashboardClient />;
}