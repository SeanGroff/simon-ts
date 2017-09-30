import * as constants from './constants';
import * as types from '../types/types';

type Action = types.ToggleGamePowerAction;

export const toggleGamePowerAction = (payload: boolean): Action => ({
  type: constants.TOGGLE_GAME_POWER,
  payload,
});
