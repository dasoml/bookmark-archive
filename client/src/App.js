import { useState, useEffect } from "react";
import "./App.css";

function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Bookmark Archive app</h1>
      <Welcome name="there"></Welcome>
    </div>
  );
}

export default App;
