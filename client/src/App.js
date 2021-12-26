import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';


function App() {

  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/contact' exact>
        <Contact />
      </Route>
      <Route path='/gallery' exact>
        <Gallery />
      </Route>
    </Switch>
  );
}

export default App;
