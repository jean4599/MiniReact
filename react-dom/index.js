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
    // custom react component
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
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
  }
}

export function setComponentProps(component, props) {
  // TODO: React lifecycle
  if (!component.base) {
    if (component.componentWillMount) {
      component.componentWillMount();
    }
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }
  component.props = props;

  let base;
  const renderer = component.render();
  console.log('renderer', renderer);
  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }
  base = _render(renderer);

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
    if (component.base.parentNode) {
      component.base.parentNode.replaceChild(base, component.base);
    }
    component.base = base;
  } else {
    component.base = base;
    component.componentDidMount && component.componentDidMount();
  }
}
ReactDOM.render = render;
export default ReactDOM;
