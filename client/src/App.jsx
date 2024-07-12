import "./App.css";
import { MainContainer } from "./components/mainContainer";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
