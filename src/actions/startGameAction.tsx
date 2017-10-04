import { Dispatch } from 'redux';
import * as constants from './constants';
import * as types from '../types/types';
import { startNextRoundAction as startNextRound } from './startNextRoundAction';

export const startGameAction = (): types.StartGameAction => ({
  type: constants.START_GAME,
});

/**
 * @todo Finish startGameThunk (See comments)
 */
export function startGameThunk(): types.Thunk {
  return (dispatch: Dispatch<types.StoreState>) => {
    // const { playerTurn, counter }: Args = getState();

    dispatch(startGameAction());
    dispatch(startNextRound());
    //  dispatch(lightSequence()) // each interval setState to color, playerTurn = true
  };
}
