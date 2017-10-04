import { startNextRoundAction } from '../../actions/startNextRoundAction';
import { START_NEXT_ROUND } from '../../actions/constants';
import * as types from '../../types/types';

type Action = types.StartNextRoundAction;

it('should create an action to change between AI and Players turn', () => {
  const expectedAction: Action = { type: START_NEXT_ROUND };
  expect(startNextRoundAction()).toEqual(expectedAction);
});
