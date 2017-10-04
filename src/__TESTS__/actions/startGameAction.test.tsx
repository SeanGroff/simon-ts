import { startGameAction } from '../../actions/startGameAction';
import { START_GAME } from '../../actions/constants';
import * as types from '../../types/types';

type Action = types.StartGameAction;

it('should create an action to start the Simon game', () => {
  const sequence = [0, 1, 2, 3];
  const expectedAction: Action = { type: START_GAME, payload: sequence };
  expect(startGameAction(sequence)).toEqual(expectedAction);
});
