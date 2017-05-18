var redux = require('redux');
var axios = require('axios');

import {
            fetchingHasCompleted,
            fetchingHasStarted,
            addHobby,
            removeHobby,
            changeName,
            removeMovie,
            addMovie,
            fetching
       } from './actions/index.jsx';
var store = require('./store/configureStore.jsx').configure();

console.log('Starting Redux...');



store.dispatch(fetching());

let trashIt = store.subscribe(()=>{
   let state = store.getState();
    
    if(state.map.isFetching){
        document.getElementById('main').innerHTML ="Loading...";
    }else{
        document.getElementById("main").innerHTML ="<a href='" + state.map.url + "' target ='_blank'>View your location</a>"
    }
});

//dispatch actions
//--------------------------


store.dispatch(changeName('Arausi'));
store.dispatch(changeName('Daniel'));
store.dispatch(addHobby('coding'));
store.dispatch(addHobby('Reading'));
store.dispatch(removeHobby(2));
store.dispatch(addMovie("Dead Pool 2","Comic"));
store.dispatch(addMovie("inception","Serious"));
store.dispatch(removeMovie(1));
