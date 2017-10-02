import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  id: number;
  animate: boolean;
  color: string;
  lightUpColor: string;
  clickable: boolean;
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  onClick(): void;
}

const Light: React.StatelessComponent<Props> = props => <div />;

const LightUp = (props: Props) => keyframes`
  0% {
    background-color: ${props.color};;
  }
  30%, 60% {
    background-color: ${props.lightUpColor};
  }
  100% {
    background-color: ${props.color};
  }
`;

const StyledLight = styled(Light)`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
  border: 12px solid #333333;
  border-top-left-radius: ${props => (props.topLeft ? '100%' : '0')};
  border-top-right-radius: ${props => (props.topRight ? '100%' : '0')};
  border-bottom-left-radius: ${props => (props.bottomLeft ? '100%' : '0')};
  border-bottom-right-radius: ${props => (props.bottomRight ? '100%' : '0')};
  pointer-events: ${props => (props.clickable ? 'auto' : 'none')};
  animation: ${props =>
    props.animate ? `${LightUp(props)} 1500ms linear` : 'none'};
  :hover {
    cursor: ${props => (props.clickable ? 'pointer' : 'initial')};
  }
`;

export default (props: Props) => <StyledLight {...props} />;

// Light.defaultProps = {
//   animate: false,
//   clickable: false,
// };
