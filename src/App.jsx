import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Usage from "./Pages/Usage";
import Bill from "./Pages/Bill";
import UsageDetail from "./Pages/UsageDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>npm run 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
         <Route path="usage" element={<Usage />} />
          <Route path="bill" element={< Bill />} /> 
          <Route path="login" element={<Login />} />
          <Route path="usage" element={<Usage />} />
          <Route path="usage/:id" element={<UsageDetail />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;