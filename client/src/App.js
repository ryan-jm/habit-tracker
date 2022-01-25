import React from 'react';

import Card from './components/card';
import Profile from './components/profile';
import Wrapper from './components/wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Profile />
        <Card>
          <h1>Test</h1>
        </Card>
        <Card>
          <h1>Test</h1>
        </Card>
        <Card>
          <h1>Test</h1>
        </Card>
        <Card>
          <h1>Test</h1>
        </Card>
        <Card>
          <h1>Test</h1>
        </Card>
        <Card>
          <h1>Test</h1>
        </Card>
      </Wrapper>
    </div>
  );
}

export default App;
