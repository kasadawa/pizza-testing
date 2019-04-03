import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow,render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {pizzas} from '../data';

Enzyme.configure({adapter: new Adapter()});

import Menu from './Menu';


test('Menu component snapshot', () => {
  const component = renderer.create(
    <Menu></Menu>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

describe('Testing Menu component',()=>{
  it('Checking the length of the pizza Components', () => {
  
    const wrapper = shallow(<Menu/>);
  
    expect(wrapper.find('Pizza')).toHaveLength(pizzas.length);
  
  });

});

 

