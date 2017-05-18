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
         case "REMOVE_HOBBY" :  
            return[
                  state.filter((hobby)=> hobby.id !== action.id)
            ]
         break;    
         default:
           return state;
         break; 
    }
 }
 
 
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
 
  
  // ------------ MapReducer -------------- //
//-------------------------------------------------------//
    let stateInit = {
        isFetching:false,
        url:undefined
    } 

    let MapReducer = (state = stateInit, action) => {

        switch(action.type){
           case "FETCHING_HAS_STARTED":
            return{
               isFetching:true,
               url:undefined
            }    
           break;
           case "FETCHING_HAS_COMPLETED":
            return{
                isFetching:false,
                url:action.url
            }
           break;
           default:
            return state;
           break;
        }
    }

//-------------------------------------------------------//
    
export {
       MapReducer,
       movieReducer,
       hobbiesReducer,
       nameReducer
    }
