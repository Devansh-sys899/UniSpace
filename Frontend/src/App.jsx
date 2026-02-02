import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      />
      <AppRoutes />
    </div>
  )
}

export default App
