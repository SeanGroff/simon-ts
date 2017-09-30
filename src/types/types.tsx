import * as constants from '../actions/constants';

export interface StoreState {
  readonly power: boolean;
  readonly strictMode: boolean;
  readonly gameStarted: boolean;
  readonly gameOver: boolean;
  readonly playerWrongButtonPress: boolean;
  readonly startNextRound: boolean;
  readonly currentIndex: number;
  readonly activeColor: string | null;
  readonly counter: number;
  readonly lightSequence: number[];
  readonly playerTurn: boolean;
}
export interface StartGameAction {
  type: constants.START_GAME;
}

export interface ToggleGamePowerAction {
  type: constants.TOGGLE_GAME_POWER;
  payload: boolean;
}

export interface StartNextRoundAction {
  type: constants.START_NEXT_ROUND;
}

export interface RoundSuccessAction {
  type: constants.ROUND_SUCCESS;
  payload: number;
}
