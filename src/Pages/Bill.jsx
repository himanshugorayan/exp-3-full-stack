import { useContext } from "react";
import { CustomerContext } from "../Components/CustomerContext";

export default function Bill() {
  const { customers } = useContext(CustomerContext);

  const rate = 7;

  return (
    <div>
      <h1>Monthly Bills</h1>

      {customers.map((c) => {
        const totalUnits = c.usage.reduce((sum, u) => sum + u.units, 0);
        const totalBill = totalUnits * rate;

        return (
          <div key={c.id} className="card">
            <h3>{c.name}</h3>
            <p>Total Units: {totalUnits} kWh</p>
            <p>Total Bill: ₹{totalBill}</p>
          </div>
        );
      })}
    </div>
  );
}