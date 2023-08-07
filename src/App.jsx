import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
