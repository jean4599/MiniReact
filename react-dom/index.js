const ReactDOM = {};

function render(vnode, container){
  return container.appendChild(_render(vnode));
}
function _render(vnode){
  console.log('react-dom render', vnode);
  if(typeof vnode === 'string'){
    return document.createTextNode(vnode)
  }
  const dom = document.createElement(vnode.tag);
  if(vnode.attrs){
    for(const attr in vnode.attrs){
      handleAttrs(dom, attr, vnode.attrs[attr])
    }
  }
  vnode.children && vnode.children.forEach(child => render(child, dom));
  return dom;
}
function handleAttrs(dom, attr, value){
  if(attr==="className"){
    dom.setAttribute('class', value)
  }
}
ReactDOM.render = render;
export default ReactDOM;