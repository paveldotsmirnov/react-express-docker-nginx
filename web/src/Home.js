import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Web: Home</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
