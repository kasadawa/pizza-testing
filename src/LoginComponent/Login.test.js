// test  makeReq(){

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow,render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

import Login from './Login';


test('Login component snapshot', () => {
  const component = renderer.create(
    <Login></Login>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

describe('Testing Login component',()=>{

    
    it('Sending empty email and password,it should block me', () => {
        
       
        const wrapper = shallow(<Login />);
        const instance =  wrapper.instance(); 
        var creds = {email:'',password:''};
        wrapper.setState(creds);

        expect(instance.checkData()).toBe(false);

        creds = {email:'dkosadkaod',password:''};
        wrapper.setState(creds);
        expect(instance.checkData()).toBe(false);



        creds = {email:'',password:'dsadsako'};
        wrapper.setState(creds);
        expect(instance.checkData()).toBe(false);



        creds = {email:'kdosakdoa',password:'dsadsako'};
        wrapper.setState(creds);
        expect(instance.checkData()).toBe(true);
        

    });

});

 