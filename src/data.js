export var pizzas = [{
    name:'Margarita',
    image: 'margarita.jpg',
    quantity: 1, 
    descr:'tomato, and other ingredience',
    style:'normal',
    options: [],
},{
    name:'Devil pizza',
    image: 'deliv.jpg',
    quantity: 1,
    descr:'ham,tomato, and other ingredience',
    style:'normal',
    options: []
},{
    name:'Calcone',
    descr:'mushrooms,ham,tomato, and other ingredience',
    quantity: 1,
    image: 'calcone.jpg',
    style:'normal',
    options: []
}];

export var prices = new Map();
prices.set('Margarita',12) 
prices.set('Devil pizza',14.4) 
prices.set('Calcone',15)
prices.set('italian', 2) 
prices.set('exstra cheese', 1.3) 
prices.set('exstra tomato', 3)


export function cloneArr(arr){
    return arr.map((val)=>{
        if(typeof val === 'object'){
            return cloneObj(val);
        }
    })
}

export function cloneObj(obj){
    var copy = {} ; 
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                copy[key] = cloneObj(obj[key]);
            }else if( Object.prototype.toString.call(obj[key]) === '[object Array]'){
                copy[key] =[];
            }else{
                copy[key] = obj[key];
            }
        }
    }
    return copy; 
}