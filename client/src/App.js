import React from 'react';

import Card from './components/card';
import Profile from './components/profile';
import Wrapper from './components/wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Profile />
        <Card type="work">
          <h1>Test</h1>
        </Card>
        <Card type="play">
          <h1>Test</h1>
        </Card>
        <Card type="study">
          <h1>Test</h1>
        </Card>
        <Card type="exercise">
          <h1>Test</h1>
        </Card>
        <Card type="social">
          <h1>Test</h1>
        </Card>
        <Card type="self-care">
          <h1>Test</h1>
        </Card>
      </Wrapper>
    </div>
  );
}

export default App;
