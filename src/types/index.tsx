export interface StoreState {
  readonly power: boolean;
  readonly strictMode: boolean;
  readonly gameStarted: boolean;
  readonly gameOver: boolean;
  readonly playerWrongButtonPress: boolean;
  readonly startNextRound: boolean;
  readonly currentIndex: number;
  readonly activeColor: string;
  readonly counter: number;
  readonly lightSequence: number[];
  readonly playerTurn: boolean;
}
