import React from "react";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Client: Dashboard</h1>
      <Outlet />
    </div>
  );
}
