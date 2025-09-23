import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PoliceOfficers from "./pages/PoliceOfficers";
import JJBoard from "./pages/JJBoard";
import NGOOfficials from "./pages/NGOOfficials";
import SocialWorkers from "./pages/SocialWorkers";
import JJAct from "./pages/JJAct";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />

          <Route path="/police-officers" element={<PoliceOfficers />} />
          <Route path="/jj-board" element={<JJBoard />} />
          <Route path="/ngo-officials" element={<NGOOfficials />} />
          <Route path="/social-workers" element={<SocialWorkers />} />
          <Route path="/jj-act" element={<JJAct />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
