import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow,render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {pizzas} from '../data';

Enzyme.configure({adapter: new Adapter()});

import Pizza from './Pizza';


test('Pizza component snapshot', () => {
  const component = renderer.create(
    <Pizza></Pizza>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

describe('Testing Pizza component',()=>{

    
    it('increment pizza', () => {
        
        for(let i = 0 ; i < pizzas.length; i++ ){
        const wrapper = shallow(<Pizza index={i} />);
        wrapper.find('i.fas.fa-plus').simulate('click');
        expect(wrapper.state().quantity).toBe(2);         
    }
  });



  it('decrement pizza', () => {
    
    for(let i = 0 ; i < pizzas.length; i++ ){
        const wrapper = shallow(<Pizza index={i} />);
        
        // do not decrement if the quantity is 1 
        expect(wrapper.state().quantity).toBe(1); 
        wrapper.find('i.fas.fa-minus').simulate('click');
        expect(wrapper.state().quantity).toBe(1);  
        
        // decrement if quantity is 2 
        wrapper.find('i.fas.fa-plus').simulate('click'); 
        expect(wrapper.state().quantity).toBe(2);  
        wrapper.find('i.fas.fa-minus').simulate('click');
        expect(wrapper.state().quantity).toBe(1); 
    }
  });



});

 

