import {LOG_IN, ACCESS_TOKEN} from '../actions/actionTypes';

const initialState = {
    loginDetails: '',
    loginState: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
      return {...state, loginDetails: action.payloads, loginState:true};
      case ACCESS_TOKEN:
        return {...state, loginDetails: action.payload, loginState: true};
    default :
        return state;
    }
}
export default reducer;