var axios = require('axios');
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

    
let fetching = () =>{
  return  (dispatch,getState) =>{
          dispatch(fetchingHasStarted());
    
//    fetch("http://ipinfo.io/developers",{method:"GET"}).then(res => res.json()).then(json =>{
//        let jsonObj = JSON.parse(json);
//        let loc = jsonObj.data.loc;
//        let base_url ="https://maps.google.com?q=";
//        
//         store.dispatch(fetchingHasCompleted(base_url + loc));
//    });
    axios.get("http://ipinfo.io").then(json =>{
        let loc = json.data.loc;
        let base_url ="https://maps.google.com?q=";
        
       dispatch(fetchingHasCompleted(base_url+loc));
    });
  }
}

    export {
            fetchingHasCompleted,
            fetchingHasStarted,
            addHobby,
            removeHobby,
            changeName,
            removeMovie,
            addMovie,
            fetching
          }


