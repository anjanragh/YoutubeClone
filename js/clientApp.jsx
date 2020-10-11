import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function (props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};
const myFirstComponent = function () {
  return (
    <div id="my=-first-component">
      <MyTitle color="burlywood" title="GoT" />
      <MyTitle color="YellowGreen" title="Stranger Things" />
      <MyTitle color="GreenYellow" title="House of Cards" />
      <MyTitle color="Peru" title="Rick and Morty" />
    </div>
  );
};
render(ce(myFirstComponent), document.getElementById("app"));
