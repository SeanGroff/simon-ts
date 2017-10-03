import * as React from 'react';
import styled from 'styled-components';

interface Props {
  startButton: boolean;
  disabled: boolean;
  power: boolean;
  startGame?(): { type: string };
  onClick?(): void;
}

// const Button: React.StatelessComponent<Props> = props => <button />;

const StyledButton = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 4px solid #222222;
  background: ${(props: Props) => (props.startButton ? '#FC0102' : 'yellow')};
  margin: auto;
  padding: 10px;
  position: relative;
  top: -5px;
  box-shadow: 0 2px 3px #222;

  &:hover {
    cursor: pointer;
  }

  &:active {
    top: -4px;
    box-shadow: 0 1px 1px #292929;
  }
`;

const StartStrictButton = (props: Props) => {
  const clickHandler = () => {
    if (props.startButton && props.startGame !== undefined) {
      props.startGame();
    } else {
      /**
       * @todo strictGame()
       */
    }
  };
  return <StyledButton onClick={clickHandler} {...props} />;
};

export default StartStrictButton;
