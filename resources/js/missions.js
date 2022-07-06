// import { ReactDOM } from "react";
// import React from "react";
// import App from "./Missions/App";

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Missions/App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);