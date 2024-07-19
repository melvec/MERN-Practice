import "./App.css";
import { MainContainer } from "./components/mainContainer";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
