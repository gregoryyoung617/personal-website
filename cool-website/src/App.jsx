import "./App.css";

import Navbar from "./navbar";
import Body from "./body";
import ProgressBar from "./progressbar";
import Home from "./home";

function App() {
  return (
    <>
      <div className="main-div">
        <ProgressBar></ProgressBar>
        <Navbar></Navbar>
        <Home></Home>
        <Body></Body>
      </div>
    </>
  );
}

export default App;
