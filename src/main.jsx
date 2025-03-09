import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalcontextProvider } from "./context/GlobalContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <GlobalcontextProvider>
    <App />
    <ToastContainer position="top-center" />
  </GlobalcontextProvider>
);
