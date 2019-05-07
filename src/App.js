import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;