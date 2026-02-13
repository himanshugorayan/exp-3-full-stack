import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <div style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/">Home</Link>
      {paths.map((name, index) => {
        const routeTo = "/" + paths.slice(0, index + 1).join("/");
        return (
          <span key={routeTo}>
            {" > "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}