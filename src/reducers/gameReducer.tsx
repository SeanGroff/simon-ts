import * as constants from '../actions/constants';
import * as types from '../types/types';
import { initialState } from '../index';

type Action =
  | types.StartGameAction
  | types.ToggleGamePowerAction
  | types.StartNextRoundAction;
//   | RoundSuccessAction;

type StoreState = types.StoreState;

export default (gameState: StoreState = initialState, action: Action) => {
  switch (action.type) {
    case constants.TOGGLE_GAME_POWER:
      if (action.payload) {
        return { ...gameState, power: action.payload };
      }
      return { ...initialState };
    case constants.START_GAME:
      return { ...gameState, gameStarted: true };
    case constants.START_NEXT_ROUND:
      return {
        ...gameState,
        counter: gameState.counter + 1,
        playerTurn: false,
      };
    default:
      return gameState;
  }
};
