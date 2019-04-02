import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

import Menu from './Menu';
import { pizzas,prices } from '../data';

test('Order changes the class when hovered', () => {
  const component = renderer.create(
    <Menu></Menu>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

describe('Testing Menu component adding and removing pizzas',()=>{
  it('Add one more pizza to every pizza type', () => {
  
    var context = {};
    const wrapper = shallow(<Menu/>);
    wrapper.setState({}); 
  
  
    expect(wrapper.find('.mitko')).toHaveLength(1);
    expect(wrapper.find('.media')).toHaveLength(3);
  
  
    // check all pizza objects 
    for(let i = 0 ; i < Object.keys(wrapper.state()).length; i++ ){
      expect(wrapper.state()[i].quantity).toBe(1);
     
      // expect(wrapper.state()[i].quantity).toBe(2);
  
    }
  
  
    wrapper.find('i.fas.fa-plus').forEach((node,index)=>{
      node.simulate('click');
      expect(wrapper.state()[index].quantity).toBe(2);
    })

  });

});

 

