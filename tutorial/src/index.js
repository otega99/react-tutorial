import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h1>My First Component</h1>;
};
export default Greeting;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
