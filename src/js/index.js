//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/counter.css";
import "../styles/home.css";

//import your own components
import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
const InitCounter = () => {
    let timer = 0; 
    setInterval(() => {
        timer++;  
        ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter timer={timer} />); 
    }, 1000);
};

window.onload = InitCounter;



