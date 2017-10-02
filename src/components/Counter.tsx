import * as React from 'react';
import styled from 'styled-components';

interface Props {
  on: boolean;
  count: number;
}

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #222222;
  background-color: #32050c;
  font-size: 32px;
  border-radius: 10px;
  width: 50px;
  color: ${on => (on ? '#DC0D29' : '#430710')};
`;

export default ({ count = 0, on }: Props) => (
  <StyledCounter {...on}>{count || '--'}</StyledCounter>
);
