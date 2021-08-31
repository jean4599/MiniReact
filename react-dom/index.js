import { createComponent } from 'react/Component';
const ReactDOM = {};

function render(vnode, container) {
  return container.appendChild(_render(vnode));
}
function _render(vnode) {
  console.log('react-dom render', vnode);
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  if (typeof vnode.tag === 'function') {
    const component = createComponent(vnode.tag, vnode.attrs);
    renderComponent(component);
    return component.base;
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    for (const attr in vnode.attrs) {
      handleAttrs(dom, attr, vnode.attrs[attr]);
    }
  }
  vnode.children && vnode.children.forEach((child) => render(child, dom));
  return dom;
}

function handleAttrs(dom, attr, value) {
  if (attr === 'className') {
    dom.setAttribute('class', value);
  } else if (/on\w+/.test(attr)) {
    dom[attr.toLowerCase()] = value;
  } else {
    dom.setAttribute(attr, value);
  }
}
export function renderComponent(component) {
  let base;
  const renderer = component.render();
  base = _render(renderer);

  if (component.base) {
    // Update
    component.componentDidUpdate && component.componentDidUpdate();
  } else {
    // Mount
    component.componentDidMount && component.componentDidMount();
  }
  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }
  component.base = base;
}
ReactDOM.render = render;
export default ReactDOM;
