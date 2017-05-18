var redux = require('redux');
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
       window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store
}
    