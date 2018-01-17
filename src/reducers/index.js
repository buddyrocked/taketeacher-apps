import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import GurusReducer from './reducer_gurus';
import StudentsReducer from './reducer_students';


const rootReducer = combineReducers({
  gurus: GurusReducer,
  students: StudentsReducer,
  form: formReducer
});

export default rootReducer;
