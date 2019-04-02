import React from 'react';
import Order from './Order';
import renderer from 'react-test-renderer';

test('Order changes the class when hovered', () => {
  const component = renderer.create(
    <Order></Order>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});