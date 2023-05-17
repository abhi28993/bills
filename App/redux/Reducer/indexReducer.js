import otpToken from './otpReducer';
import loginData from './loginDataReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  otpToken,
  loginData
});

export default rootReducer;
