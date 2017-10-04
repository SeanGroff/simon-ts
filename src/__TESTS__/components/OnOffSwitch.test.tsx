global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import OnOffSwitch from '../../components/OnOffSwitch';

configure({ adapter: new Adapter() });

it('renders a toggle switch correctly', () => {
  const component = shallow(<OnOffSwitch />);
  expect(component).toMatchSnapshot();
});
