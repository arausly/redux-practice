var redux = require('redux');

console.log('Starting Redux.....');

const reducer = (state ={searchText:'',showCompleted:false,todos:[]},action) =>{
    
return state;    
}


const store = redux.createStore(reducer);

let currentState = store.getState();

console.log("Current State, ",currentState);

