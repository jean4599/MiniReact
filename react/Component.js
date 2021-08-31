import { renderComponent } from 'react-dom';
export default class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  setState(newState) {
    console.log(newState);
    if (typeof newState === 'function') {
      newState = newState(this.state);
    }
    Object.assign(this.state, newState);
    renderComponent(this);
  }
}
export function createComponent(component, props) {
  let instance;
  // distinguish class component and function component
  if (component.prototype && component.prototype.render) {
    instance = new component(props);
  } else {
    instance = new Component(props);
    instance.constructor = component;
    instance.render = function () {
      return this.constructor(props);
    };
  }
  console.log(instance);
  return instance;
}
