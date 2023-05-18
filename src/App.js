import React from "react";
import './App.css';
import routes from "./routes";
import Message from "./components/Message/Message";

function App() {
  return (
    <Message>
      {routes}
    </Message>
  );
}

export default App;
