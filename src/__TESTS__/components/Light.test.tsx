global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Light from '../../components/Light';

configure({ adapter: new Adapter() });

it('should render a Light with a green background', () => {
  const component = shallow(<Light color="green" />);
  expect(component).toMatchSnapshot();
});
