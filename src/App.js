/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../src/reducers/index';
import AppNavigation from '../src/navigation/AppNavigation';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from '../src/sagas/rootSaga';
import NavigationService from './navigation/NavigationService';

const sagaMiddleware = creatSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    </Provider>
  )
}
sagaMiddleware.run(rootSaga)
export default App