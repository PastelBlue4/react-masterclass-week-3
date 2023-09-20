import { Link, Outlet } from "react-router-dom";

export default function Naruto() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "12px",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>나루토</h2>

      <Link to="/author/Masashi_Kishimoto/Naruto/chapter">목차</Link>
      <Link to="/author/Masashi_Kishimoto/Naruto/characters">등장인물</Link>

      <Outlet />
    </div>
  );
}
