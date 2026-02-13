export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          fontSize: "48px",
           textShadow: "0 0 20px rgba(255,255,255,0.6)"
           }}>
        ⚡ Smart Electricity Management
           </h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Monitor power usage, manage bills, and track consumption in real time.
        </p>
      </div>

      {/* Stats Section */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
        <div className="card">
          <h2>1200+</h2>
          <p>Active Users</p>
        </div>

        <div className="card">
          <h2>3500+</h2>
          <p>Units Monitored</p>
        </div>

        <div className="card">
          <h2>99.9%</h2>
          <p>System Reliability</p>
        </div>
      </div>

      {/* Services Section */}
      <h2>Our Services</h2>

      <div className="card">
        <h3>📊 Real-Time Monitoring</h3>
        <p>Track your electricity consumption instantly.</p>
      </div>

      <div className="card">
        <h3>💳 Bill Management</h3>
        <p>View and manage your monthly electricity bills.</p>
      </div>

      <div className="card">
        <h3>⚙ Smart Alerts</h3>
        <p>Get alerts for high usage and avoid overcharges.</p>
      </div>

      {/* Contact Section */}
      <h2 style={{ marginTop: "40px" }}>📞 Contact Us</h2>

      <div className="card">
        <p>Email: support@electricityapp.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Address: Smart Grid Tower, Sector 15, India</p>
      </div>
    </div>
  );
}