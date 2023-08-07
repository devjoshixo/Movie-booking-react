import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/details'>
          <MoviePage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
