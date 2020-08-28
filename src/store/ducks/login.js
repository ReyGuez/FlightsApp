import {createActions, createReducer} from 'reduxsauce';
import {getStore} from '../store';

export const {Types, Creators} = createActions({
  fetchLogin: ['login'],
});

const ININTIAL_STATE = {
  login: true,
};

export const setSesionID = credentials => {
  let store = getStore();
  store.dispatch({
    type: Types.FETCH_LOGIN,
    login: credentials,
  });
};

export const getUser = credentials => {
  let store = getStore();
  store.dispatch({
    type: Types.FETCH_LOGIN,
    login: credentials,
  });
};

const fetchLogin = (state = ININTIAL_STATE, action) => {
  let {login} = action;
  return {...state, login};
};

export default createReducer(ININTIAL_STATE, {
  [Types.FETCH_LOGIN]: fetchLogin,
});
