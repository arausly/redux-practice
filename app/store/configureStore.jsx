var redux = require('redux');
var thunk = require('redux-thunk').default;
import {
           MapReducer,
           movieReducer,
           hobbiesReducer,
           nameReducer
       } from '../reducers/index.jsx';


export let configure = () =>{
    
    let reducer = redux.combineReducers({
        movies : movieReducer,
        hobbies: hobbiesReducer,
        name:    nameReducer,
        map: MapReducer
    });



    var  store = redux.createStore(reducer,redux.compose(  
       redux.applyMiddleware(thunk),
       window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store
}