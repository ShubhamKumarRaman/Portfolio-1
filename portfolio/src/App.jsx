import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";

// import Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-hooks" element={<ReactHooks />} />
            <Route path="/ui-ux" element={<UiUx />} />
            <Route path="/form-example" element={<FormExample />} />
          </Routes>
        </ScrollToTop>
        <Footer />
        <SpeedInsights />
      </Router>
    </React.StrictMode>
  );
}

export default App;
