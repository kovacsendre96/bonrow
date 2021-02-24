import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
   
      <Switch location={location}key={location.pathname}>
      <Route path="/bonrow" exact>
      <Bio />
      </Route>


      <Route path="/gallery" exact>
      <Gallery />
      </Route>


      <Route path="/music" exact>
      <Music />
      </Route>


      <Route path="/contact"exact>
      <Contact />
      </Route>

      </Switch>

      </AnimatePresence>
      {/*  <Footer />  */}
    </div>
  );
}

export default App;

