import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import BUKU from "./Pages/Buku";
import SEWA from "./Pages/Sewa";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/Pages/Buku" element={<BUKU />} />
          <Route path="/Pages/Sewa" element={<SEWA />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
