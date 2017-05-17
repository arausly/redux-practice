import redux from 'redux';

console.log('Starting Redux...');



function changeProp(obj){
    return {
        ...obj,
        name:'karo',
    
    }
//    obj.name ="daniel";
//    return obj;
} 


let res = changeProp({
    name:"Arausi",
});

console.log(res);