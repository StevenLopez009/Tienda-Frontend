import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./ui/pages/Splash";
import Login from "./ui/pages/Login";
import SignIn from "./ui/pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
