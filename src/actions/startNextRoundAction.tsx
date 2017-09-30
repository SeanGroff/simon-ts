import * as types from '../types/types';
import * as constants from './constants';

type Action = types.StartNextRoundAction;

export const startNextRoundAction = (): Action => ({
  type: constants.START_NEXT_ROUND,
});

// type Args = {
//   playerTurn: number,
//   counter: number,
// };

/**
 * @todo Write test for this Thunk
 *
 * @export
 * @returns
 */
// export function nextTurnThunk() {
//   return (dispatch: *, getState: *) => {
//     const { playerTurn, counter }: Args = getState();
//     setTimeout(() => {
//       dispatch(startNextRoundAction(!playerTurn));
//     }, counter * 1000);
//   };
// }
