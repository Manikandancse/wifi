import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'test':
      return {...state, ...rest}
    default:
      return state
  }
}

const store = createStore(changeState, applyMiddleware(thunk))
export default store