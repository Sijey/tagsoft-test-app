import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/characters';
import Sales from "./components/sales/Sales";
import thunk from "redux-thunk";
import Characters from "./components/characters/Characters";
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-browser-router';
import { Redirect, Route, Switch } from 'react-router';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Menu inverted className='menu-bar'>
        <Menu.Item as={NavLink} to='/' exact>Characters</Menu.Item>
        <Menu.Item as={NavLink} to='/sales' exact>Sales</Menu.Item>
      </Menu>
      <Switch>
        <Route path='/' exact component={Characters} />
        <Route path='/sales' exact component={Sales} />
      </Switch>
    </Provider>
  );
}

export default App;
