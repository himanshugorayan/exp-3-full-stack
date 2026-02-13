import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/usage">Usage</NavLink>
      <NavLink to="/bill">Bill</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}