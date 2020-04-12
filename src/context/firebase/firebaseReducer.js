import { ADD_NOTE, SHOW_LOADER, FETCH_NOTES, REMOVE_NOTE, STOP_LOADER } from '../types';

const handlers = {
  [SHOW_LOADER]: state => ({
    ...state, 
    loading: true
  }),
  [STOP_LOADER]: state => ({
    ...state, 
    loading: false
  }),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload,
    loading: false
  }),
  [REMOVE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  DEFAULT: state => state
}

const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
}

export default firebaseReducer;