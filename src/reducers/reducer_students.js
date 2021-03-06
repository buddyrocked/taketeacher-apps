import _ from 'lodash';
import { FETCH_STUDENTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_STUDENTS:
    return action.payload.data;
  default:
    return state;
  }
}
