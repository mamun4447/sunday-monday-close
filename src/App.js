// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import AllGuns from "./components/AllGuns/AllGuns";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState(0);

  const countIncrease = () => {
    setCart(cart + 1);
  };
  return (
    <div>
      <Navbar count={cart}></Navbar>
      <AllGuns countIncrease={countIncrease}></AllGuns>
    </div>
  );
}

export default App;
