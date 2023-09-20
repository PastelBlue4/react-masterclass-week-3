import { Link, Outlet } from "react-router-dom";

export default function Tensura() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        marginTop: "12px",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
        전생했더니 슬라임이었던 건에 대하여
      </h2>

      <Link to="/author/Fuse/Tensura/chapter">목차</Link>
      <Link to="/author/Fuse/Tensura/characters">등장인물</Link>

      <Outlet />
    </div>
  );
}
