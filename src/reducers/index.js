import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HomeReducer from './reducer_home';
import GurusReducer from './reducer_gurus';
import StudentsReducer from './reducer_students';


const rootReducer = combineReducers({
  home:HomeReducer,
  gurus: GurusReducer,
  students: StudentsReducer,
  form: formReducer
});

export default rootReducer;
