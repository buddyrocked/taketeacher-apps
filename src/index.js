import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import MenuAppBar from './components/menu_app_bar';
import LabelBottomNavigation from './components/label_bottom_navigation';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <MenuAppBar />
        <div className="bottom-nav">
          <LabelBottomNavigation />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
