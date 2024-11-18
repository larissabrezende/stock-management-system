import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar os componentes das páginas
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import StockUpdate from "./pages/StockUpdate";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stock-update" element={<StockUpdate />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
