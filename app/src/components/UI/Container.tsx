import React from "react";
import styled from 'styled-components';

interface ContainerProps {
    children?: React.ReactNode;

}

const Container: React.FC<ContainerProps> = ({  children }) => {
    return (
        <DivStyles>
          {children}
        </DivStyles>
    );
};

export default Container;

const DivStyles = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px 80px 15px;
`;