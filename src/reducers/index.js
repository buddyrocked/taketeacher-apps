import { combineReducers } from 'redux';
import GurusReducer from './reducer_gurus';

const rootReducer = combineReducers({
  gurus: GurusReducer
});

export default rootReducer;
