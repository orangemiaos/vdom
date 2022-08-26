import "./index.css";
import { createElement, render } from './vDom';

function component() {
  var element = document.createElement("div");
  element.innerHTML = "hello";
  return element;
}

document.body.appendChild(component());

// const vDom1 = createElement(
//   "ul",
//   {
//     class: "list",
//     style: "width: 300px; height: 300px; background-color: orange",
//   },
//   [
//     createElement(
//       "li",
//       {
//         class: "item",
//         "data-index": 0,
//       },
//       [
//         createElement(
//           "p",
//           {
//             class: "text",
//           },
//           ["第1个列表项"]
//         ),
//       ]
//     ),
//     createElement(
//       "li",
//       {
//         class: "item",
//         "data-index": 1,
//       },
//       [
//         createElement(
//           "p",
//           {
//             class: "text",
//           },
//           [
//             createElement(
//               "span",
//               {
//                 class: "title",
//               },
//               []
//             ),
//           ]
//         ),
//       ]
//     ),
//     createElement(
//       "li",
//       {
//         class: "item",
//         "data-index": 2,
//       },
//       ["第3个列表项"]
//     ),
//   ]
// );
// const rDom = render(vDom1);

// console.log(rDom);
