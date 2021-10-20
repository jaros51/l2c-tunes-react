import React from 'react';
import './App.scss';
import { Switch, Route} from 'react-router-dom';
import { TheNavigation } from './components/TheNavigation';

import Home from './views/Home';
import About from './views/About';
import Tunes from './views/Tunes';

function App() {
  return (
    <div className="App">
      
      
      <header >
      <TheNavigation/>
      <Dude></Dude>
      <Suck></Suck>
      </header>
          
      <main className="content">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/tunes" component={Tunes}/>
          <Route path="/about" component={About}/>
        </Switch>
      </main>

    </div>
  );
}

function Dude(){
  return (
  <div> KOKOT </div>
  )
}


class Suck extends React.Component{
  render(){
    return <p>SUCKKKK</p>}
}

export default App;
