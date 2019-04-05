import  React from 'react';
import * as  $ from 'jquery';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        'email':'',
        'password':'',
        'address':'',
        'city':'',
        'state':'',
        'postal':'',
    }
  
  }

  changeHandler(e,stateString){
    this.setState({ [stateString]: e.target.value});
  }


    
  registerUser(e){
    e.preventDefault();   
    console.log('register user')
    this.checkData();
    this.makeReq();
  }  

    checkData(){
    // here we can check the data if we want to
    // check email and password fields 
    }

    makeReq(){
     $.ajax({
        method:'POST',
        url : 'http://localhost:3001/register',
        data: this.state})
        .done((msg)=>{
        // if there is no error
        if(!!msg.error){
            // userLogin();
        }else{
            alert(msg.error);
        }
        })
        .fail(()=> alert('something happend and the req failed'))
    }
  
  

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className="col-md-6">
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input value={this.state.email} onChange={e =>this.changeHandler(e,'email')} type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input value={this.state.password} onChange={e =>this.changeHandler(e,'password')} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input value={this.state.address} onChange={e=>this.changeHandler(e,'address')} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input value={this.state.city} onChange={e =>this.changeHandler(e,'city')} type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select value={this.state.state} onChange={e =>this.changeHandler(e,'state')} id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input value={this.state.postal} onChange={e =>this.changeHandler(e,'postal')} type="text" className="form-control" id="inputZip" />
                </div>
            </div>

            
            <button type="submit" onClick={(e) => this.registerUser(e)} className="btn btn-primary">Sign in</button>
            </form>
        </div>
      </div>
    );
  }
}



export default Register;

