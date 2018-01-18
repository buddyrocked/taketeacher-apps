import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import MenuAppBar from './components/menu_app_bar';
import LabelBottomNavigation from './components/label_bottom_navigation';
import App from './components/app';
import GurusIndex from './components/gurus_index';
import GurusNew from './components/teachers_new';
import StudentsIndex from './components/students_index';
import StudentsNew from './components/students_new';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <MenuAppBar />
        <Switch>
          <Route path="/student/new" component={StudentsNew} />
          <Route path="/student" component={StudentsIndex} />
          <Route path="/teacher/new" component={GurusNew} />
          <Route path="/teacher" component={GurusIndex} />
          <Route path="/" component={App} />
        </Switch>
        <div className="bottom-nav">
          <LabelBottomNavigation />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
