import * as types from '../actions/actionTypes';

const initialState = {
  wardrobe: [],
  products: []
};

export default function wardrobeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state
      };
      break;
    case types.FETCH_DATA_SUCCESS:
      console.log('success fetching data');
      state.products = action.data.products;
      console.log(action);
      return {
        ...state, 
        products: state.products
      }
    case types.ADD:
      console.log('add');
      console.log(action);
      state.wardrobe.push(action.data.id);
      console.log(state);
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
