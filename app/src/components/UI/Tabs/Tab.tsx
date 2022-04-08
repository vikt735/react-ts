import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string
}

const Tab: React.FC<Props> = ({ children }) => {
  return <LiStyles>{children}</LiStyles>
}

export default Tab;

const LiStyles = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;