import { createStore, applyMiddleware } from 'redux';
import { StoreState } from './types/types';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer';

export const initialState: StoreState = {
  power: false,
  strictMode: false,
  gameStarted: false,
  gameOver: false,
  playerWrongButtonPress: false,
  startNextRound: false,
  currentIndex: 0,
  activeColor: null,
  counter: 0,
  lightSequence: [],
  playerTurn: false,
};

export const store = createStore<StoreState>(
  gameReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
