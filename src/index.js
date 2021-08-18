import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const element = (
  <div >
    Hello <span className="element">World</span>
  </div>
)
ReactDOM.render(element, document.getElementById('app'));
/*
 1. @babel/plugin-transform-react-jsx 
 tansfer jsx into React.createElement(tag,attrs,child1,child2,child3,child4)
 2. React.createElement() return {tag, attrs, children}
 3. 
*/
console.log(element);