import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import Digimons from './pages/digimons/digimons.component';
import Tarea from './pages/tarea/tarea.js';
import DigimonDetail from './pages/detail/digimon-detail.component';

//Component
import Header from './components/header/header.component';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: 'Usuario test',
    }
  }

  render() {
    const { currentUser } = this.state;
    // this.state.currentUser
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/tarea' component={Tarea} />
          <Route path='/digimons' component={Digimons} />
          <Route path='/:id' component={DigimonDetail}/>
        </Switch>
      </div>
    )
  }
}

export default App;
