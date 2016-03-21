import * as types from '../actions/actionTypes';


import Storage from 'react-native-storage';


var storage = new Storage({
    // maximum capacity, default 1000  
    size: 1000,    
    
    // expire time, default 1 day(1000 * 3600 * 24 secs) 
    defaultExpires: 1000 * 3600 * 24,
    
    // cache data in the memory. default is true. 
    enableCache: true,
    
    // if data was not found in storage or expired, 
    // the corresponding sync method will be invoked and return  
    // the latest data. 
    sync : {
        // we'll talk about the details later. 
    }
})

global.storage = storage;


const initialState = {
  wardrobe: [],
  products: []
};

function storeWardrobe(id) {

  storage.load({
  key: 'wardrobe',
  autoSync: false,
  syncInBackground: false
  }).then( res => {
    console.log('succeed');
    console.log(res);
    res.push(id);

     storage.save({
      key: 'wardrobe', 
      rawData: res,
      expires: 1000 * 3600
    });

  }).catch( err => {
    console.log('fail');
    console.warn(err);

    var wardrobe = new Array();
    wardrobe.push(id);

    storage.save({
      key: 'wardrobe', 
      rawData: wardrobe,
      expires: 1000 * 3600
    });
  })
}

export default function wardrobeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state
      };
      break;
    case types.FETCH_DATA_SUCCESS:
      state.products = action.data.products;
      return {
        ...state, 
        products: state.products
      }
    case types.ADD:
      state.wardrobe.push(action.data.id);

      storeWardrobe(action.data.id);

      return {
        ...state
      };
      break;
    case types.REMOVE:
      return {
        ...state
      };
      break;
    default:
      return state;
  }
}
