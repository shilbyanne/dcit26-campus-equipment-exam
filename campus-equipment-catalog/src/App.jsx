import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import initialEquipment from "./data/equipment.json";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import EquipmentList from "./pages/EquipmentList.jsx";
import EquipmentDetails from "./pages/EquipmentDetails.jsx";
import AddEquipment from "./pages/AddEquipment.jsx";
 
export default function App() {
  const [equipment, setEquipment] = useState(initialEquipment);
 
  function addEquipment(newItem) {
    setEquipment((current) => [newItem, ...current]);
  }
 
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<EquipmentList equipment={equipment} />} />
          <Route path="/equipment/:id" element={<EquipmentDetails equipment={equipment} />} />
          <Route path="/add-equipment" element={<AddEquipment onAddEquipment={addEquipment} />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </main>
    </>
  );
}
