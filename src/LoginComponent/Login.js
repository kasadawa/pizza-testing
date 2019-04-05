import  React from 'react';
import * as  $ from 'jquery';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      'email':'',
      'password':''
    }
  }

  submitData(e){
    e.preventDefault(); // in order not to refresh the page  
    if (this.checkData()) this.makeReq(); 

  }
  checkData(){
    if(this.state.email !== '' && this.state.password !=='') return true ; 
    return false ;
    // here we can check the data if we want to
    // check email and password fields 
  }
  makeReq(){
    $.ajax({
      method:'POST',
      url : 'http://localhost:3001/login',
      data: this.state})
      .done((msg)=>{
        // if there is no error
        if(!!msg.error){
          // userLogin();
          alert(msg.data);
        }else{
          if(msg.data === 'success'){
            alert('successfuly loged')
          }
        }
      })
      .fail((res)=>{alert('something happend and the req failed' + res);})
  }

  changeHandler(e,stateString){
    this.setState({ [stateString]: e.target.value});
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={(e)=>this.changeHandler(e,'email')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={(e)=>this.changeHandler(e,'password')} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button id="submitData" type="submit" onClick={(e)=>this.submitData(e)} className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;



