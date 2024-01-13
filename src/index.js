import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./pages/home";
import Login from "./pages/login";
import Settings from "./pages/settings";
import Notification from "./pages/notification"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/settings" element={<Settings />}></Route>
        <Route index path="/notifications" element={<Notification />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
