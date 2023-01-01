import React from "react";
import createRoot from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
import { createRoot } from "react-dom";

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// const root = document.getElementById('root');
// createRoot(root).render(<App />);
