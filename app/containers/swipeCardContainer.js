import React, { Component } from 'react-native';
var {View, Text, StyleSheet} = React;
var Redux = require('redux');
var ReactRedux = require('react-redux');
var thunk = require('redux-thunk');
var { createStore, applyMiddleware, combineReducers } = Redux;
var { Provider } = ReactRedux;

import * as reducers from '../reducers';
import SwipeApp from './swipeApp';
var Actions = require('react-native-router-flux').Actions;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <SwipeApp/>
      </Provider>
    );
  }
}

// class App extends React.Component{
// 	render(){
// 		return (
// 				<Text> HAHAHAHA </Text>
// 			)
// 	}
// }

module.exports = App;