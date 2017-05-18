
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

export{
        nameReducer,
        hobbiesReducer,
        movieReducer
        
    
    
}