import  React from 'react';
import { pizzas} from '../data';
import './Menu.css';

import Pizza  from '../PizzaComponent/Pizza'



export default class Menu extends React.Component {

    constructor(props){
        super(props);
    }


  render() {
    return (
      <div>
          { pizzas.map((_,key)=>{
              
              return <div key={key} >
                        <Pizza index={key}  />

                    </div>;
          })

          }
      </div>
    );
  }
}