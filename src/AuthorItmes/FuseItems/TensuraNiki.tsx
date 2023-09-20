import { Link, Outlet } from "react-router-dom";

export default function TensuraNiki() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "12px",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>전생슬 일기</h2>

      <Link to="/author/Fuse/Tensura-Niki/chapter">목차</Link>
      <Link to="/author/Fuse/Tensura-Niki/characters">등장인물</Link>

      <Outlet />
    </div>
  );
}
