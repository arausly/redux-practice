
// action generators addMovie
//--------------------------

let addMovie = (title, Genre) =>{
    return{
               type:"ADD_MOVIE",
               title,
               Genre,
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

  
// action generators changeName
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

// action generators removeHobby
//--------------------------

let removeHobby = (id) =>{
     return {
         type:"REMOVE_MOVIE",
         id
     }
}


// ------------ MapReducer action generators-------------- //

    let fetchingHasStarted = () =>{
        return {
           type:"FETCHING_HAS_STARTED"   
        }
    }

    let fetchingHasCompleted = (url) =>{
      return{
           type:"FETCHING_HAS_COMPLETED",
           url
      }    
    }

//-------------------------------------------------------//

    export {
            fetchingHasCompleted,
            fetchingHasStarted,
            addHobby,
            removeHobby,
            changeName,
            removeMovie,
            addMovie
          }