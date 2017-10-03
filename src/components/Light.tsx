import * as React from 'react';
import styled, { keyframes, StyledProps } from 'styled-components';

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

interface LightUpProps {
  color: string;
  lightUpColor: string;
}

const Light: React.StatelessComponent<Props> = props => {
  console.log(props);
  return <div />;
};

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
  background-color: ${(props: StyledProps<Props>) => props.color};
  border: 12px solid #333333;
  border-top-left-radius: ${(props: StyledProps<Props>) =>
    props.topLeft ? '100%' : '0'};
  border-top-right-radius: ${(props: StyledProps<Props>) =>
    props.topRight ? '100%' : '0'};
  border-bottom-left-radius: ${(props: StyledProps<Props>) =>
    props.bottomLeft ? '100%' : '0'};
  border-bottom-right-radius: ${(props: StyledProps<Props>) =>
    props.bottomRight ? '100%' : '0'};
  pointer-events: ${(props: StyledProps<Props>) =>
    props.clickable ? 'auto' : 'none'};
  animation: ${(props: StyledProps<Props>) =>
    props.animate ? `${LightUp(props)} 1500ms linear` : 'none'};
  :hover {
    cursor: ${(props: StyledProps<Props>) =>
      props.clickable ? 'pointer' : 'initial'};
  }
`;

export default (props: Props) => <StyledLight {...props} />;
