import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Bio />
    </div>
  );
}

export default App;
