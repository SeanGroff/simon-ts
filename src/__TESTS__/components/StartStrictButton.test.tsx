global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import StartStrictButton from '../../components/StartStrictButton';

configure({ adapter: new Adapter() });

it('renders a circular button correctly', () => {
  const component = shallow(<StartStrictButton />);
  expect(component).toMatchSnapshot();
});
