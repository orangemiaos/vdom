import "./index.css";
import { createElement, render } from "./vDom.js";

// function component() {
//   var element = document.createElement("div");
//   element.innerHTML = "hello";
//   return element;
// }
// document.body.appendChild(component());

const vDom1 = createElement("ul", {
  class: "list",
  style: "width: 300px; height: 300px; background-color: orange",
});

console.log(vDom1);
// const rDom = render(vDom1);

// console.log(rDom);
