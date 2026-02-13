import { useContext, useState } from "react";
import { CustomerContext } from "../Components/CustomerContext";

export default function Dashboard() {
  const { customers, setCustomers } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [meter, setMeter] = useState("");
  const [month, setMonth] = useState("");
  const [units, setUnits] = useState("");

  const addUsage = () => {
    if (!name || !meter || !month || !units) return;

    let existing = customers.find(c => c.id === meter);

    if (existing) {
      existing.usage.push({
        month,
        units: Number(units)
      });
      setCustomers([...customers]);
    } else {
      const newCustomer = {
        id: meter,
        name,
        usage: [
          { month, units: Number(units) }
        ]
      };
      setCustomers([...customers, newCustomer]);
    }

    setName("");
    setMeter("");
    setMonth("");
    setUnits("");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Meter Number"
          value={meter}
          onChange={(e) => setMeter(e.target.value)}
        />

        <input
          type="text"
          placeholder="Month (e.g. Jan)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <input
          type="number"
          placeholder="Units Consumed"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />

        <button onClick={addUsage}>Add / Update</button>
      </div>

      <h2>Customers</h2>

      {customers.map((c) => (
        <div key={c.id} className="card">
          <strong>{c.name}</strong> (Meter: {c.id})
          <p>Total Months: {c.usage.length}</p>
        </div>
      ))}
    </div>
  );
}