import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { toggleGamePowerAction } from '../actions/toggleGamePowerAction';
import { startGameThunk } from '../actions/startGameAction';
import { startNextRoundAction } from '../actions/startNextRoundAction';
// import { roundSuccessThunk } from '../actions/roundSuccessAction';
import LightsWrapper from './LightsWrapper';
import CenterConsole from './CenterConsole';
import { StoreState, Thunk } from '../types/types';

interface Props {
  power: boolean;
  counter: number;
  lightSequence: number[];
  playerTurn: boolean;
  toggleGamePowerAction(payload: boolean): { type: string; payload: boolean };
  startGameThunk(): Thunk;
  // roundSuccessThunk(): any;
  startNextRoundAction(): { type: string };
}

const SimonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 100%;
  box-shadow: 0 0 12px #222222;
  width: 472px;
  height: 472px;
  position: relative;
`;

const mapStateToProps = (state: StoreState) => ({
  power: state.power,
  counter: state.counter,
  lightSequence: state.lightSequence,
  playerTurn: state.playerTurn,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) =>
  bindActionCreators(
    {
      toggleGamePowerAction,
      startGameThunk,
      // roundSuccessThunk,
      startNextRoundAction,
    },
    dispatch,
  );

export const Simon = (props: Props) => (
  <SimonContainer>
    <LightsWrapper
      power={props.power}
      counter={props.counter}
      lightSequence={props.lightSequence}
      playerTurn={props.playerTurn}
      toggleGamePowerAction={props.toggleGamePowerAction}
      startGameThunk={props.startGameThunk}
    />
    <CenterConsole
      power={props.power}
      counter={props.counter}
      toggleGamePowerAction={props.toggleGamePowerAction}
      startGameThunk={props.startGameThunk}
    />
  </SimonContainer>
);

const EnhancedSimon = connect(mapStateToProps, mapDispatchToProps)(Simon);

export default EnhancedSimon;
