import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Fuse() {
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
      <Link to="/author/Fuse/Tensura">전생했더니 슬라임이었던 건에 대하여</Link>
      <Link to="/author/Fuse/Tensura-Niki">전생슬라임 일기</Link>

      <Outlet />
    </div>
  );
}
