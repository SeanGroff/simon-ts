import { Dispatch } from 'redux';
import * as constants from './constants';
import * as types from '../types/types';
import { startNextRoundAction as startNextRound } from './startNextRoundAction';
import { getSequenceOfRandomNumbers } from '../utils/logic';

export const startGameAction = (payload: number[]): types.StartGameAction => ({
  type: constants.START_GAME,
  payload,
});

/**
 * @todo Finish startGameThunk (See comments)
 */
export function startGameThunk(): types.Thunk {
  return (dispatch: Dispatch<types.StoreState>) => {
    // const { playerTurn, counter }: Args = getState();
    const sequence = getSequenceOfRandomNumbers();
    dispatch(startGameAction(sequence));
    dispatch(startNextRound());
    //  dispatch(lightSequence()) // each interval setState to color, playerTurn = true
  };
}
