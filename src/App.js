import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
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


      <Route path="/music">
      <Music />
      </Route>


      <Route path="/contact">
      <Contact />
      </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
