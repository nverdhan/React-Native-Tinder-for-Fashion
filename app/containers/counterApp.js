'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';


class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions, goBack } = this.props;
    console.log(this.props);
    return (
      <Counter
        counter={state.count}
        goBack = {goBack}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
