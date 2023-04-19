import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inbox from "./components/Inbox/Inbox";
import Spam from "./components/Spam/Spam";
import Trash from "./components/Trash/Trash";
import SingleEmail from "./components/SingleEmail/SingleEmail";
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/mail/:id" element={<SingleEmail />} />
      </Routes>
    </div>
  );
};

root.render(
  <Router>
    <App />
  </Router>
);
