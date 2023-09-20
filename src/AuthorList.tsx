import { Link, Outlet } from "react-router-dom";

export default function AuthorList() {
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
      <Link to="/author/Fuse">후세</Link>

      <Link to="/author/Masashi_Kishimoto">키시모토 마사시</Link>

      <Outlet />
    </div>
  );
}
