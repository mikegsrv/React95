import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from '@react95/core';

class Welcome extends React.Component {
  render() {
    return <h1>Hello React95!</h1>;
  }
}

const App = () => (
  <>
    <GlobalStyle />
    <Welcome />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
