
var redux = require('redux');
console.log('Starting Redux...');




// ------------ reducer for movie -------------- //
//----------------------------------------------//
let movieId = 1;
const movieReducer = (state = [],action) =>{
    switch(action.type){
        case "ADD_MOVIE": 
            return [
                  ...state,
                   {
                       id:movieId++,
                       title:action.title,
                       genre:action.Genre,
                   }
            ]
        break;
        case "REMOVE_MOVIE":
          return [
                   state.filter((hobby)=> hobby.id !== action.id)
          ]
        break;
        default:
         return state;
    }
    
}

// ------------ reducer for hobbiesReducer -------------- //
//-------------------------------------------------------//
 let idHobby = 1;
 let hobbiesReducer = (state =[],action) =>{
    
      switch(action.type){
         case "ADD_HOBBY" :
            return [
                ...state,
                 {
                     
                     id:idHobby++,
                     hobby:action.hobby
                 }
            ]
         break;
         default:
           return state;
         break; 
    }
 }
 
 // ------------ reducer  for name -------------- //
//-------------------------------------------------------//

 let nameReducer = (state = "Anonymous",action) =>{
    
      switch(action.type){
         case "CHANGE_NAME" :
            return action.name;
         break;
         default:
           return state;
         break; 
    }
 }

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
