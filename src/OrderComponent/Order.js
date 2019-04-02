import React from 'react';


class Order extends React.Component{
    constructor(props){
        super(props);

        const ordernum = +window.sessionStorage.getItem('ordernum');
        console.log(ordernum)
         const orders = [...Array(ordernum)].map((v,key)=>{
            console.log(key)
            var tmp = window.sessionStorage.getItem('order'+(key+1));
            return JSON.parse(tmp) ; 
        });
        this.state = {orders, ordernum};
        console.log(orders)
    }

    render(){
        return (
            <div className='row justify-content-md-center'>
             <div className='col-md-8'>
                <h1 className='text-center'>Your Selection</h1>
                <br></br>
                <br></br>
                {this.state.orders.map((order,key)=>{
                    return <div key={key}>
                        <p>{order.quantity} x {order.name}  with {order.descr} </p>
                        <p> Style: {order.style || ''} </p>
                        <p> { order.options.length !== 0 ?"Options: " + order.options.join(', ')  : ''}</p>
                        <hr></hr>
                    </div>;
                })}
                </div>
            </div> );

    }
}
export default Order ;