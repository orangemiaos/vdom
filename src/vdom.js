import Element from "./element";

function createElement(type, props, children) {
  console.log(4444);
  return new Element(type, props, children);
}

function render() {}

export { createElement, render };

/*

      <div className="big" key={2}>
        <span className="small"></span>
      </div>

{
    type:div,
    props:{
        className:big,
        children:{
            type:span
            props:{
                className:small
            }
        }
    }
}

*/
