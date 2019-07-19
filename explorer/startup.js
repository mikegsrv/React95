import React from 'react';
import styled from 'styled-components';

import { GlobalStyle, Button, Icon, Frame } from '@react95/core';

const StartupMenu = styled(Frame)`
  position: fixed;
  bottom: 0;

  font-size: 12px;
  font-weight: bold;
`;

const StartupButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px 0;

  &:active {
    padding: 3px 3px 0 5px;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

const Startup = () => (
  <>
    <GlobalStyle />

    <Button
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
    >
      Ok
    </Button>
    <StartupMenu width="100%">
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
