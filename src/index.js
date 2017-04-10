import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import {createStore} from 'redux'

function counter(state=0, action ) {
  switch(action.type){
    case 'INCREMENT':
    return state + 20
    case 'DECREMENT':
    return state - 35
    default:
    return state   
    
  }
  
}

let store = createStore(counter)

store.subscribe(()=>
console.log(store.getState())
)

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})





ReactDOM.render(
  <App />,
  document.getElementById('root')
);
