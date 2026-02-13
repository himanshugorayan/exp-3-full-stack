import { useContext } from "react";
import { CustomerContext } from "../Components/CustomerContext";
import { Link } from "react-router-dom";

export default function Usage() {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h1>Customer Usage</h1>

      {customers.map((c) => (
        <div key={c.id} className="card">
          <Link to={`/usage/${c.id}`}>
            <h3>{c.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}