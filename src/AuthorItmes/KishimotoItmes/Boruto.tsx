import { Link, Outlet } from "react-router-dom";

export default function Boruto() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "12px",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>보루토</h2>

      <Link to="/author/Masashi_Kishimoto/Boruto/chapter">목차</Link>
      <Link to="/author/Masashi_Kishimoto/Boruto/characters">등장인물</Link>

      <Outlet />
    </div>
  );
}
