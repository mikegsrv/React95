import React from 'react';
import styled from 'styled-components';

import { GlobalStyle, Button, Icon } from '@react95/core';

const StartupMenu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: #c3c7cb;
  padding: 4px;
  border: none;

  font-size: 12px;
  font-weight: bold;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 0px #000;
`;

const StartupButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px 0;
`;

const Startup = () => (
  <>
    <GlobalStyle />

    <StartupMenu>
      <StartupButton>
        <Icon
          name="windows95_logo"
          style={{
            width: 22,
            height: 22,
            marginRight: 4,
          }}
        />
        Start
      </StartupButton>
    </StartupMenu>
  </>
);

export default Startup;
