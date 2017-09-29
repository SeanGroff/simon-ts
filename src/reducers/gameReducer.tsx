// @flow
import { initialState } from '../index';
import { StoreState } from '../types/index';
// import type {
//   StartGameAction,
//   ToggleGamePowerAction,
//   StartNextRoundAction,
//   RoundSuccessAction,
// } from '../actions/actionTypes';
// import {
//   TOGGLE_GAME_POWER,
//   START_GAME,
//   START_NEXT_ROUND,
// } from '../actions/constants';

// type Action =
//   | StartGameAction
//   | ToggleGamePowerAction
//   | StartNextRoundAction
//   | RoundSuccessAction;

export default (gameState: StoreState = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GAME_POWER:
      if (action.payload) {
        return { ...gameState, power: action.payload };
      }
      return { ...initialState };
    case START_GAME:
      return { ...gameState, gameStarted: true };
    case START_NEXT_ROUND:
      return {
        ...gameState,
        counter: gameState.counter + 1,
        playerTurn: false,
      };
    default:
      return gameState;
  }
};
