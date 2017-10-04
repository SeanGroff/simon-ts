global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Counter from '../../components/Counter';

configure({ adapter: new Adapter() });

it('renders a counter display', () => {
  const component = shallow(<Counter />);
  expect(component).toMatchSnapshot();
});
