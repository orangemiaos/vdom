class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

function setAttrs(node, prop, value) {
  switch (prop) {
    case "value":
      break;
    default:
      node.setAttribute(prop, value);
  }
}

function render(vdom) {
  let { type, props, children } = vdom;

  const el = document.createElement(type);
  for (let key in props) {
    console.log("key", key);
    setAttrs(el, key, props[key]);
  }
  return el;
}

const vDom1 = createElement(
  "div",
  {
    class: "list",
    style: "width: 300px; height: 300px; background-color: orange",
  },
  [
    
  ]
);

console.log("vdom", vDom1);

const rDom = render(vDom1);

console.log("rDom", rDom);

function renderDOM(el, rootEl) {
  rootEl.appendChild(el);
}
renderDOM(rDom, document.getElementById("root"));
