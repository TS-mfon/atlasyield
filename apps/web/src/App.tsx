import { NavLink, Route, Routes } from "react-router-dom";

import { AdminPage } from "./pages/AdminPage";
import { AlertsPage } from "./pages/AlertsPage";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignalsPage } from "./pages/SignalsPage";

export function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-name">AtlasYield</span>
          <span className="brand-copy">
            Treasury mandate OS for allocating capital across Mantle yield and RWA routes.
          </span>
        </div>
        <nav className="nav">
          <NavLink to="/">Overview</NavLink>
          <NavLink to="/signals">Signals</NavLink>
          <NavLink to="/alerts">Alerts</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signals" element={<SignalsPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}
