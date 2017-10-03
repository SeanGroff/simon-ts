import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  animate: boolean;
  color: string;
  lightUpColor: string;
  clickable: boolean;
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  className?: string;
  onClick(): void;
}

interface LightUpProps {
  color: string;
  lightUpColor: string;
}

const Light: React.StatelessComponent<Props> = props => (
  <div className={props.className} />
);

const LightUp = (props: LightUpProps) => keyframes`
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
  background-color: ${(props: Props) => props.color};
  border: 12px solid #333333;
  border-top-left-radius: ${(props: Props) => (props.topLeft ? '100%' : '0')};
  border-top-right-radius: ${(props: Props) => (props.topRight ? '100%' : '0')};
  border-bottom-left-radius: ${(props: Props) =>
    props.bottomLeft ? '100%' : '0'};
  border-bottom-right-radius: ${(props: Props) =>
    props.bottomRight ? '100%' : '0'};
  pointer-events: ${(props: Props) => (props.clickable ? 'auto' : 'none')};
  animation: ${(props: Props) =>
    props.animate ? `${LightUp(props)} 1500ms linear` : 'none'};
  :hover {
    cursor: ${(props: Props) => (props.clickable ? 'pointer' : 'initial')};
  }
`;

export default (props: Props) => <StyledLight {...props} />;
