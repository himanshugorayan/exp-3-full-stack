import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../Components/CustomerContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function UsageDetail() {
  const { id } = useParams();
  const { customers } = useContext(CustomerContext);

  const customer = customers.find(
    (c) => String(c.id) === String(id)
  );

  if (!customer || !customer.usage || customer.usage.length === 0) {
    return <h2>No Data Found</h2>;
  }

  const data = {
    labels: customer.usage.map((u) => u.month),
    datasets: [
      {
        label: "Units Consumed",
        data: customer.usage.map((u) => u.units),
        backgroundColor: "#FFD700"
      }
    ]
  };

  return (
    <div>
      <h1>{customer.name} - Usage Chart</h1>
      <div style={{ width: "600px", marginTop: "30px" }}>
        <Bar data={data} />
      </div>
    </div>
  );
}