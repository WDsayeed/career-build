import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
