import {FORGOT_PASSWORD} from '../actions/actionTypes';

const initialState = {
    forgotDetails: '',
    forgotState: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FORGOT_PASSWORD:
      return {...state, forgotDetails: action.payloads, forgotState:true};
    default :
        return state;
    }
}
export default reducer;