var redux = require('redux');

console.log('Starting Redux.....');

let reduxInit = {
                 searchText:'',
                 showCompleted:false,
                 todos:[]
                };

const reducer = (state = reduxInit, action) =>{
    
    switch(action.type){
            case "CHANGE_SEARCH_TEXT":
              return{
                 ...state,
                  searchText:action.searchText
              }
            break;
            default:
             return state;
            break;
    }
}


const store = redux.createStore(reducer,redux.compose(
 window.devToolsExtension ? window.devToolsExtension() : f => f
));

let currentState = store.getState();

console.log("Current State, ",currentState);

store.subscribe(()=>{
    let state = store.getState();
    document.getElementById('main').innerHTML = state.searchText;
})

store.dispatch({
    type:"CHANGE_SEARCH_TEXT",
    searchText:"Some Text"
});

store.dispatch({
    type:"CHANGE_SEARCH_TEXT",
    searchText:"#tbt"   
});


console.log('search text should have changed to some Text',store.getState());

