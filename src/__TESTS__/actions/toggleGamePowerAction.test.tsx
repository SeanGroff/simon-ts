import { TOGGLE_GAME_POWER } from '../../actions/constants';
import { toggleGamePowerAction } from '../../actions/toggleGamePowerAction';
import * as types from '../../types/types';

type Action = types.ToggleGamePowerAction

it('should create an action that toggles the game power on or off', () => {
  const expectedAction: Action = { type: TOGGLE_GAME_POWER, payload: true };
  expect(toggleGamePowerAction(true)).toEqual(expectedAction);
});
