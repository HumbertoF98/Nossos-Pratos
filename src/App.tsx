import React from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
