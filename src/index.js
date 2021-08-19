import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
const element = (
  <div>
    Hello <span className="element">World</span>
    <FunctionComponent name="foo" />
    <ClassComponent name="boo" />
  </div>
);
ReactDOM.render(element, document.getElementById('app'));
/*
 1. @babel/plugin-transform-react-jsx 
 tansfer jsx into React.createElement(tag,attrs,child1,child2,child3,child4)
 2. React.createElement() return {tag, attrs, children}
 3. 
*/
console.log(element);
