global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import CenterConsole from '../../components/CenterConsole';
import { toggleGamePowerAction } from '../../actions/toggleGamePowerAction';
import { startGameThunk } from '../../actions/startGameAction';

it('renders correctly', () => {
  const component = shallow(
    <CenterConsole
      power={true}
      counter={0}
      toggleGamePowerAction={toggleGamePowerAction}
      startGameThunk={startGameThunk}
    />,
  );
  expect(component).toMatchSnapshot();
});
