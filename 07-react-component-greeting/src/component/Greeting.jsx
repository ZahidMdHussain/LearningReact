import React from "react";

function Greeting(){
    let getTime = new Date();
let time = getTime.getHours();
var greeting = "";

let customCss = {
  color: "",
  background: ""
};

if (time <= 12) {
  greeting = "Good Morning";
  customCss.color = "#A04000";
  customCss.background = "#F5B041";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customCss.color = "#196F3D";
  customCss.background = "#2ECC71";
} else {
  greeting = "Good Night";
  customCss.color = "#1A5276";
  customCss.background = "#5DADE2";
}
return <>
<div style={{ backgroundColor: customCss.background }} className="header">
  <h1 style={{ color: customCss.color }} className="heading">
    {greeting}
  </h1>
</div>
</>
}

export default Greeting;