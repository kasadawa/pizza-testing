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
