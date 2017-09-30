import * as constants from './constants';
import * as types from '../types/types';
// import { nextTurnAction } from './nextTurnAction';
// import { getRandomNumber } from '../utils/logic';

type Action = types.StartGameAction;

export const startGameAction = (): Action => ({
  type: constants.START_GAME,
});

// type Args = {
//   playerTurn: number,
//   counter: number,
// };

/**
 * @todo Finish startGameThunk (See comments)
 */
// export function startGameThunk() {
//   return (dispatch: *, getState: *) => {
//     const { playerTurn, counter }: Args = getState();

//     dispatch(startGameAction());
//     dispatch(startNextRound()) // counter++, playerTurn = false
//      dispatch(lightSequence()) // each interval setState to color, playerTurn = true
//
//   };
// }
