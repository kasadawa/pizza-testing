import  React from 'react';
import { pizzas, cloneObj } from '../data';


import margarita  from '../img/margarita.jpg';
import devil  from '../img/devil.jpg';
import calcone  from '../img/calcone.jpg';


import './Pizza.css';


// var orderPizzaObj = {
//     extraTomato: Bool, 
//     extraCheese: Bool,
//     pizzaName:String, 
//     totalPrice: Number,
//     type:String,
//     quantity: Number, 
// }



[pizzas[0].image, pizzas[1].image,pizzas[2].image] = [margarita,devil,calcone];

export default class Pizza extends React.Component {

    constructor(props){
        super(props);
        this.state = cloneObj(pizzas[this.props.index]);


        //bindings 
        this.changeStyle = this.changeStyle.bind(this);
    }


    changeQuantity(type){ 
        if(!isNaN(this.state.quantity) && !(this.state.quantity === 1 && type ==='dec') ){
           
            this.setState((state)=>{
                state.quantity =  type === 'inc' ? state.quantity+ 1 : state.quantity- 1; 
                return state;
            })
        }
    }

    changeStyle(e){
        this.setState({style:e.target.value});
    }


    changeIngredient(e){
        if(e.target.checked){
            this.state.options.push(e.target.value);
        }else{
            let i = this.state.options.indexOf(e.target.value);
            this.state.options.splice(i,1);
        }
        this.setState(this.state);
    }



    addToBasket(){
        var orderNum = window.sessionStorage.getItem('ordernum'); 
        // +null = 0 :O 
        if(isNaN(+orderNum) || orderNum == null ){ // if someone changed the sessionStorage or its null
            window.sessionStorage.setItem('ordernum',1);
            orderNum = 1 ;
        }else{
            orderNum++;
        }
        window.sessionStorage.setItem('order' + orderNum ,JSON.stringify(this.state));
        window.sessionStorage.setItem('ordernum',orderNum);
        document.getElementById('ordernum').innerText = orderNum;
        this.setState(cloneObj(pizzas[this.props.index]));
        
        // clear selected input fields
        document.getElementById('tomato'+this.props.index).checked = false; 
        document.getElementById('cheese'+this.props.index).checked = false; 
        
    }

  render() {
    return (
      <div>    
            <div className="media">
              <img src={this.state.image} alt='' className="mr-3 resize" />
              <div className="media-body">
                <h5 className="mt-0">{this.props.name}</h5>
                Ingredients: {this.state.descr}

                <div className="col-md-4">
                <p>Quantity <span>{this.state.quantity}</span><i onClick={this.changeQuantity.bind(this,'inc')} className="fas fa-plus"></i><i onClick={this.changeQuantity.bind(this,'dec')} className="fas fa-minus"></i></p>
                </div>
                
               <div className='row'>
                <div className="col-md-4">
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor={"inputGroupSelect0" + this.props.index}>Pizza Style</label>
                    </div>
                    <select value={this.state.style} onChange={(e)=>this.changeStyle(e)} className="custom-select" id={"inputGroupSelect0" + this.props.index}>
                        <option value="clasic" selected>clasic</option>
                        <option value="italian">italian</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-4"></div>
                 
                <div className="col-md-4">
                    <button onClick={this.addToBasket.bind(this)} className="btn btn-success" >Add to basket</button>
                </div>
                </div>
                <div className="col-md-4">

                <div className="input-group mb-3">
           

                    <div className="form-check">
                        <input onChange={(e)=>this.changeIngredient(e)} className="form-check-input" type="checkbox" value="cheese" id={"cheese"+ this.props.index }/>
                        <label className="form-check-label"  htmlFor={ "cheese" + this.props.index}>
                            Extra Cheese
                        </label>
                        <br></br>
                        <input onChange={(e)=>this.changeIngredient(e)} className="form-check-input" type="checkbox" value="tomato" id={"tomato"+ this.props.index} />
                        <label className="form-check-label" htmlFor={"tomato" + this.props.index}>
                            Extra Tomato
                        </label>
                    </div>

                    </div>
                  
                </div> 

              </div> 

            </div>
      </div>
    );
  }
}