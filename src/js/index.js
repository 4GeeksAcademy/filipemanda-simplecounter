//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

var counter = 0

function rerender() {
    counter++;
    var str = "000000" + counter
    console.log(counter)
    ReactDOM.render(<Home num={str} />, document.querySelector("#app"))
}





//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
setInterval(rerender, 1000);
