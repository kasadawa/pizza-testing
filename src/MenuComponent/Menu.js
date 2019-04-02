import  React from 'react';
import { pizzas,prices } from '../data';
import margarita  from '../img/margarita.jpg';
import devil  from '../img/devil.jpg';
import calcone  from '../img/calcone.jpg';

import './Menu.css';


// var orderPizzaObj = {
//     extraTomato: Bool, 
//     extraCheese: Bool,
//     pizzaName:String, 
//     totalPrice: Number,
//     type:String,
//     quantity: Number, 
// }



// get Array and clone its objects 
// deep cloning
function cloneArr(arr){
    return arr.map((val)=>{
        if(typeof val === 'object'){
            return cloneObj(val);
        }
    })
}

function cloneObj(obj){
    var copy = {} ; 
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
                copy[key] = cloneObj(obj[key]);
            }else if( Object.prototype.toString.call(obj[key]) == '[object Array]'){
                copy[key] =[];
            }else{
                copy[key] = obj[key];
            }
        }
    }
    return copy; 
}

export default class Menu extends React.Component {

    constructor(props){
        super(props);
        [pizzas[0].image, pizzas[1].image,pizzas[2].image] = [margarita,devil,calcone];

        this.state =  cloneArr(pizzas); // this can be reworked
        


        // bindings
        this.changeIngredient = this.changeIngredient.bind(this);
       
    }

    changeQuantity(key, type){ 
        if(!isNaN(this.state[key].quantity) && !(this.state[key].quantity === 1 && type ==='dec') ){
           
            this.setState((state)=>{
                state[key].quantity =  type === 'inc' ? state[key].quantity+ 1 : state[key].quantity- 1; 
                return state;
            })
        }
    }

    changeStyle(key,e){
        this.state[key].style = e.target.value;
        this.setState(this.state);
    }

    changeIngredient(key,e){
        console.log('state',this.state)
        if(e.target.checked){
            this.state[key].options.push(e.target.value);
        }else{
            let i = this.state[key].options.indexOf(e.target.value);
            this.state[key].options.splice(i,1);
        }
        this.setState(this.state);
    }
    
    addToBasket(key){
        var orderNum = window.sessionStorage.getItem('ordernum'); 
        // +null = 0 :O 
        if(isNaN(+orderNum) || orderNum == null ){ // if someone changed the sessionStorage or its null
            window.sessionStorage.setItem('ordernum',1);
            orderNum = 1 ;
        }else{
            orderNum++;
        }
        window.sessionStorage.setItem('order' + orderNum ,JSON.stringify(this.state[key]));
        window.sessionStorage.setItem('ordernum',orderNum);
        this.setState(cloneArr(pizzas));
    }

    orderPizza(){

    }

  render() {
    return (
      <div>
          { pizzas.map((pizza,key)=>{
              
              return <div key={key} className="media">
              <img src={this.state[key].image} className="mr-3 resize" />
              <div className="media-body">
                <h5 className="mt-0">{pizza.name}</h5>
                Ingredients: {pizza.descr}

                <div className="col-md-4">
                <p>Quantity <span>{this.state[key].quantity}</span><i onClick={this.changeQuantity.bind(this,key,'inc')} className="fas fa-plus"></i><i onClick={this.changeQuantity.bind(this,key,'dec')} className="fas fa-minus"></i></p>
                </div>
                <div className='row'>
                <div className="col-md-4">
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Pizza Style</label>
                    </div>
                    <select onChange={(e)=>this.changeStyle(key,e)} className="custom-select" id="inputGroupSelect01">
                        <option value="clasic" selected>clasic</option>
                        <option value="italian">italian</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button onClick={this.addToBasket.bind(this,key)} className="btn btn-success" >Add to basket</button>
                </div>
                </div>
                <div className="col-md-4">

                <div className="input-group mb-3">
           

                    <div className="form-check">
                        <input onChange={(e)=>this.changeIngredient(key,e)} className="form-check-input" type="checkbox" value="cheese" id={"cheese"+ key }/>
                        <label className="form-check-label"  htmlFor={ "cheese" + key}>
                            Extra Cheese
                        </label>
                        <br></br>
                        <input onChange={(e)=>this.changeIngredient(key,e)} className="form-check-input" type="checkbox" value="tomato" id={"tomato"+ key} />
                        <label className="form-check-label" htmlFor={"tomato" + key}>
                            Extra Tomato
                        </label>
                    </div>

                    </div>
                  
                </div>

              </div>



            </div>;
          })

          }


      </div>
    );
  }
}