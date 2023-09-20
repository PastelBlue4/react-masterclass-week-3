import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Kishimoto() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        margin: "12px",
        gap: "12px",
      }}
    >
      <Link to="/author/Masashi_Kishimoto/Naruto">나루토</Link>
      <Link to="/author/Masashi_Kishimoto/Boruto">보루토</Link>

      <Outlet />
    </div>
  );
}
