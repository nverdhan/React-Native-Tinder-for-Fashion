'use strict';

import React, { Component, View } from 'react-native';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import SwipeCards from '../components/swipecards'
import Spinner from 'react-native-loading-spinner-overlay';

var Persons = [
  {id: 1, name: 'Barrack Obama', image: 'https://pbs.twimg.com/profile_images/451007105391022080/iu1f7brY_400x400.png'},
  {id: 2, name: 'Albert Einstein', image: 'http://www.deism.com/images/Einstein_laughing.jpeg'},
  {id: 3, name: 'The Beast', image: 'http://vignette2.wikia.nocookie.net/marveldatabase/images/4/43/Henry_McCoy_(Earth-10005)_0002.jpg/revision/latest?cb=20091116202257'},
  {id: 4, name: 'Me', image: 'https://avatars0.githubusercontent.com/u/1843898?v=3&s=460'},
  {id: 5, name: 'HellBoy', image: 'http://www.flickeringmyth.com/wp-content/uploads/2014/06/Ron-Perlman-as-Hellboy.jpg'}
]


class SwipeApp extends Component {

  state = {
    products : []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.actions.getDataFromAPI();
  }

  componentWillReceiveProps(nextProps){
    var productsToSend = [];
    nextProps.state.products.map(function(product){
      var newProd = {
        id: product.productBaseInfo.productIdentifier.productId,
        name : product.productBaseInfo.productAttributes.title,
        image: product.productBaseInfo.productAttributes.imageUrls['400x400']
      }
      productsToSend.push(newProd);
    })

    this.setState({
      products: productsToSend
    });
  }

  render() {
    const { state, actions } = this.props;
    const { products } = this.state;

    if(products.length > 0){
      return (
          <SwipeCards
            persons= {products}
            {...actions} />
        );
    }else{

      return (
        <View style={{ flex: 1 }}>
          <Spinner visible={true} />
        </View>
        )

    }

    
  }
}

export default connect(state => ({
    state: state.wardrobeReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(SwipeApp);
