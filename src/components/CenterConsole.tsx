import * as React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import StartStrictButton from './StartStrictButton';
import OnOffSwitch from './OnOffSwitch';

interface Props {
  hasMargin?: boolean;
  hasPadding?: boolean;
  power: boolean;
  counter: number;
  toggleGamePowerAction(power: boolean): { type: string; payload: boolean };
  startGameAction(): { type: string };
}

interface LabelProps {
  hasMargin?: boolean;
  hasPadding?: boolean;
}

const StyledWrapper = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  background-color: #ece7ee;
  border: 12px solid #333333;
  width: 220px;
  height: 220px;
  margin: -120px 0 0 -120px;
`;

const TopHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  width: 220px;
  height: 110px;
  border-top-left-radius: 220px;
  border-top-right-radius: 220px;
  margin-top: -13px;
`;

const BottomHalf = TopHalf.extend`
  flex-direction: column;
  background-color: #ece7ee;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 220px;
  border-bottom-right-radius: 220px;
  margin-top: 0;
`;

const Header = styled.span`
  color: #ece7ee;
  font-family: 'Anton', sans-serif;
  font-size: 52px;
  letter-spacing: 2px;
  margin-top: 35px;
  text-transform: capitalize;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: #222222;
  margin: ${({ hasMargin }: LabelProps) =>
    hasMargin ? 'auto 5px 0 5px' : '0'};
  padding: ${({ hasPadding }: LabelProps) => (hasPadding ? '0 0 5px 0' : '0')};
  text-transform: capitalize;
  text-align: center;
`;

export default (props: Props) => (
  <StyledWrapper>
    <TopHalf>
      <Header>{'simon'}</Header>
    </TopHalf>
    <BottomHalf>
      <ButtonsRow>
        <ButtonWrapper>
          <StyledLabel hasPadding={true}>{'count'}</StyledLabel>
          <Counter count={props.counter} on={props.power} />
        </ButtonWrapper>
        <ButtonWrapper>
          <StyledLabel hasPadding={true}>{'start'}</StyledLabel>
          <StartStrictButton
            startButton={true}
            disabled={!props.power || props.counter ? true : false}
            power={props.power}
            startGame={props.startGameAction}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <StyledLabel hasPadding={true}>{'strict'}</StyledLabel>
          <StartStrictButton
            startButton={false}
            disabled={!props.power}
            power={props.power}
          />
        </ButtonWrapper>
      </ButtonsRow>
      <ButtonsRow>
        <StyledLabel hasMargin={true}>{'off'}</StyledLabel>
        <OnOffSwitch
          power={props.power}
          powerOnOff={props.toggleGamePowerAction}
        />
        <StyledLabel hasMargin={true}>{'on'}</StyledLabel>
      </ButtonsRow>
    </BottomHalf>
  </StyledWrapper>
);
