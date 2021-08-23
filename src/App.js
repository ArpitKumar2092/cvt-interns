import React from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Content from "./components/Navbar/Content";
 import SubContent from "./components/Navbar/SubContent";


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <SubContent />
    </div>
  );
}

export default App;
