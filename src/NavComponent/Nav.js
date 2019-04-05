import React from 'react';
import Menu from '../MenuComponent/Menu';
import Login from '../LoginComponent/Login';
import Register from '../RegisterComponent/Register';
import Order from '../OrderComponent/Order';
import Home from '../HomeComponent/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {

    constructor(props){
      super(props);
      var orders = window.sessionStorage.getItem('ordernum') || '';
      
      this.state = {orders};
    }

    redirect(){
      window.location.href= '/order';
    }
    render() {
      return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{'backgroundColor': '#e3f2fd'}}>
            <a className="navbar-brand" href="/">Test Pizza</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu/">Menu</Link>
                    
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login/">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to="/register/">Sign in</Link>
                        </li>
                    </ul>


                  
                      <button onClick={this.redirect.bind(this)} className="btn btn-outline-success my-2 my-sm-0" >
                        <i className="fas fa-shopping-basket"></i> <span id="ordernum">{this.state.orders}</span>
                      </button>
                

                </div>

            </nav>
       
  
          <Route path="/" exact component={Home} />
          <Route path="/menu/" component={Menu} />
          <Route path="/order/" component={Order} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
        </div>
      </Router>
      );
    }
  }
  
  export default Nav ; 