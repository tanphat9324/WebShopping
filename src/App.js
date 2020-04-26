import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CategoryPage from './containers/CategoryPage/CategoryPage'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CategoryPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
