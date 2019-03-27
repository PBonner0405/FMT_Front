import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRoutes from './AppRoutes';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore(window.__INITIAL_STATE__)}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;