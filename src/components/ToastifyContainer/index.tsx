'use client'

import { ToastContainer } from "react-toastify";

export function ToastifyContainer() {
  return (
    <ToastContainer
      autoClose={3000}
      position="top-right"
      pauseOnHover
      draggable
      newestOnTop
      hideProgressBar={false}
    />
  );
}
