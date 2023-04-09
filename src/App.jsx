import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className=" bg-indigo-50">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
