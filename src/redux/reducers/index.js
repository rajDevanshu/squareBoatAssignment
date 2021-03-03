import {combineReducers} from 'redux';

import LogInReducer from './LogInReducer';
import SignupReducer from './SignupReducer';
import AllJobsReducer from './AllJobsReducer';
import ForgotPassword from './forgetPasswordReducer'

const rootReducer = combineReducers({
    LogInReducer   : LogInReducer,
    SignupReducer : SignupReducer,
    ForgotPassword : ForgotPassword,
    AllJobsReducer : AllJobsReducer
})

export default rootReducer;