import React, { useState } from "react"; // Added useState
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import VendorLogin from "./component/login/VendorLogin";
import MiningCorporationLogin from "./component/login/MiningCorporationLogin";
import HomePage from "./component/home/home";
import Layout from "./component/layout/vendorNav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/vendor-login" element={<VendorLogin />} />
        <Route path="/mining-login" element={<MiningCorporationLogin />} />
      </Routes>
    </Router>
    // <>
    //   <Layout/>
    // </>
  );
}


export default App;
