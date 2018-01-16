import _ from 'lodash';
import { FETCH_GURUS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_GURUS:
    return action.payload.data;
  default:
    return state;
  }
}
