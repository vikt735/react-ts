import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"
import styled from 'styled-components';

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <UlStyles>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </UlStyles>
      {children[selectedTab]}
    </>
  )
}

export default Tabs;

const UlStyles = styled.ul`
  display: flex;
  list-style: none;
`;