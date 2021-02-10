import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio';


function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Bio />
    </>
  );
}

export default App;
