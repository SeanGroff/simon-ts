global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
