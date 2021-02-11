import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio';
import Gallery from './pages/Gallery';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route path="/" exact>
      <Bio />
      </Route>

      <Route path="/gallery">
      <Gallery />
      </Route>

      </Switch>
    </>
  );
}

export default App;
