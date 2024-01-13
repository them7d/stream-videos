import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./pages/home";
import Login from "./pages/login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
