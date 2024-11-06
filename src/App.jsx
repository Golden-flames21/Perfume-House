import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
// import Header from "./components/Header";
// import Allperfumes from "./components/AllPerfumes";
// import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
