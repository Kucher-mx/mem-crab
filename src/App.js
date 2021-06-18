import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'

import StartPage from './pages/start/Start.component';
import MainPage from './pages/main/Main.component';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={StartPage} />
      <Route exact path="/app" component={MainPage} />
    </div>
  );
}

export default App;
