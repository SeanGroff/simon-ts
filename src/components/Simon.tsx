import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import toggleGamePowerAction from '../actions/toggleGamePowerAction';
import { startGameAction } from '../actions/startGameAction';
import { startNextRoundAction } from '../actions/startNextRoundAction';
// import { roundSuccessThunk } from '../actions/roundSuccessAction';
import LightsWrapper from './LightsWrapper';
import CenterConsole from './CenterConsole';

interface Props {
  toggleGamePowerAction(payload: boolean): { type: string, payload: boolean },
  startGameAction(): { type: string },
  roundSuccessThunk(): any,
  startNextRoundAction(): { type: string },
  power: boolean,
  counter: number,
  lightSequence: (number[]),
  playerTurn: boolean,
};

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

const mapStateToProps = state => ({
  power: state.power,
  counter: state.counter,
  lightSequence: state.lightSequence,
  playerTurn: state.playerTurn,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      // toggleGamePowerAction,
      startGameAction,
      // roundSuccessThunk,
      startNextRoundAction,
    },
    dispatch,
  );

export const Simon = (props: Props) =>
  <SimonContainer>
    <LightsWrapper {...props} />
    <CenterConsole {...props} />
  </SimonContainer>;

const EnhancedSimon = connect(mapStateToProps, mapDispatchToProps)(Simon);

export default EnhancedSimon;
