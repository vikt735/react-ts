import React, { useCallback } from "react"
import styled from 'styled-components';

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li>
      <ButtonStyles onClick={onClick}>{title}</ButtonStyles>
    </li>
  )
}

export default TabTitle;

const ButtonStyles = styled.button`
  color: #000;
  font-size:0.75em;
  margin: 1em;
  border: none;
  padding: 0.55em 1em;
  border-bottom: 2px solid #FFE6FA;
  cursor: pointer;
  background: none;
  @media (min-width: 992px) {
    font-size:1em;
  }
  &.active {
    color: #FFE6FA;
  }
`;
