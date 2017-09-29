import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { StoreState } from './types/index';
import App from './App';
import gameReducer from './reducers/gameReducer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

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

const store = createStore<StoreState>(
  gameReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
