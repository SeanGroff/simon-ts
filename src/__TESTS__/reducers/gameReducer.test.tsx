import { initialState } from '../../Store';
import {
  TOGGLE_GAME_POWER,
  START_GAME,
  START_NEXT_ROUND,
} from '../../actions/constants';
import * as types from '../../types/types';
import reducer from '../../reducers/gameReducer';

type Action =
  | types.StartGameAction
  | types.ToggleGamePowerAction
  | types.StartNextRoundAction;
//   | RoundSuccessAction;

describe('Game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_GAME_POWER with a falsy payload', () => {
    const mockState = initialState;
    const action: Action = { type: TOGGLE_GAME_POWER, payload: false };
    expect(reducer(mockState, action)).toEqual(initialState);
  });

  it('should handle TOGGLE_GAME_POWER with truthy payload', () => {
    const mockState = initialState;
    const action: Action = { type: TOGGLE_GAME_POWER, payload: true };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      power: action.payload,
    });
  });

  it('should handle START_GAME action', () => {
    const mockState = initialState;
    const action: Action = { type: START_GAME, payload: [0, 1, 2, 3] };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      gameStarted: true,
      lightSequence: action.payload,
    });
  });

  it('should handle START_NEXT_ROUND action', () => {
    const mockState = initialState;
    const action: Action = { type: START_NEXT_ROUND };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      counter: mockState.counter + 1,
      playerTurn: false,
    });
  });
});
