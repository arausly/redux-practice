
var redux = require('redux');
console.log('Starting Redux...');




let reducer = redux.combineReducers({
    movies : movieReducer,
    hobbies: hobbiesReducer,
    name:    nameReducer
});



// action generators addMovie
//--------------------------

let addMovie = (title, Genre) =>{
    return{
               type:"ADD_MOVIE",
               title,
               Genre,
    }
}

// action generators changeMovie
//--------------------------

let changeName = (name) =>{
    return{
        type:"CHANGE_NAME",
        name
    }
}

// action generators addHobby
//--------------------------

let addHobby = (hobby) =>{
    return{
          type:"ADD_HOBBY",
          hobby
    }
}

// action generators  removeMovie
//--------------------------

let removeMovie = (id) =>{
    return{
        type:"REMOVE_MOVIE",
        id
    }
}

var  store = redux.createStore(reducer,redux.compose(  
   window.devToolsExtension ? window.devToolsExtension() : f => f
));


let trashIt = store.subscribe(()=>{
   let state = store.getState();
    
    console.log('New name',state.name);
    console.log("Hobby",state.hobbies);
    console.log("movie",state.movies);
});

//dispatch actions
//--------------------------

store.dispatch(changeName('Arausi'));
store.dispatch(changeName('Daniel'));
store.dispatch(addHobby('coding'));
store.dispatch(addHobby('Reading'));
store.dispatch(addMovie("Dead Pool 2","Comic"));
store.dispatch(addMovie("inception","Serious"));
store.dispatch(removeMovie(1));
