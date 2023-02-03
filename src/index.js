import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Mathmatics from "./Math/Mathmatics";
import Navb from "./Navb";
import Footer from "./Footer";
import QuickReflexes from "./QuickReflexes/QuickReflexes";
import MemoryMatch from "./MemoryMatch/MemoryMatch";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Navb />
      <Routes>
        <Route exact path="*" element={<App />} />
        <Route exact path="/Mathmatics" element={<Mathmatics />} />
        <Route exact path="/MemoryMatch" element={<MemoryMatch />} />
        <Route exact path="/QuickReflexes" element={<QuickReflexes />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
);
