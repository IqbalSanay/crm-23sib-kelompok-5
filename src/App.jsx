import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";  // Layout baru
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import Penjualan from "./pages/Penjualan";
import Tracking from "./pages/Tracking";
import OrderForm from "./pages/OrderForm";
import Feedback from "./pages/Feedback";
import Helpdesk from "./pages/Helpdesk";
import Pelanggan from "./pages/Pelanggan";
import SignInPage from "./pages/SignInPage";
import CampaignPage from "./pages/CampaignPage";
import DaftarPromo from "./pages/DaftarPromo";

function App() {
  return (
    <Routes>
      {/* Route khusus Auth (SignInPage) */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignInPage />} />
      </Route>

      {/* Route utama pakai MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CampaignPage" element= {<CampaignPage/>} />
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/DaftarPromo" element={<DaftarPromo />} />
      </Route>
    </Routes>
  );
}

export default App;
