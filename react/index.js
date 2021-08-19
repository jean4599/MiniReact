import Component from './Component';

const React = {};
React.createElement = function(tag, attrs, ...children){
  return({
    tag,
    attrs,
    children
  })
}

React.Component = Component;
export default React