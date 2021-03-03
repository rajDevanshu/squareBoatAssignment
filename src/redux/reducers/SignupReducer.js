import {SIGN_UP} from '../actions/actionTypes';

const initialState = {
    signupDetails: '',
    signupState: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
      return {...state, signupDetails: action.payloads, signupState:true};
    default :
        return state;
    }
}
export default reducer;