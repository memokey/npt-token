import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";
import jwt_decode from "jwt-decode";

export const slice = createSlice({
  name: 'auth',
  initialState: {
    authData: null,
    authError: null,
    isAuthenticated: false,
  },
  reducers: {
    signinSuccess: (state, action) => {
      localStorage.setItem("jwt_token", JSON.stringify(action.payload));
      state.authData = jwt_decode(action.payload);
      state.isAuthenticated = true;
      state.authSigninError = [];
    },
    signinError: (state, action) => {
      state.authSigninError = action.payload;
    },
    signupSuccess: (state, action) => {
      localStorage.setItem("jwt_token", JSON.stringify(action.payload));
      state.authData = jwt_decode(action.payload);
      state.isAuthenticated = true;
      state.authSignupError = [];
    },
    signupError: (state, action) => {
      state.authSignupError = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.authData = null;
      state.isAuthenticated = false;
    }
  }
});

export const { signinSuccess, signinError, signupSuccess, signupError, logoutSuccess } = slice.actions;

export const signin = (formData, history, notification) => async dispatch => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(signinSuccess(data.token));
    notification.success({
      title: "Signin",
      text: "Signin success!"
    })
    history.push("/panel");
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch(signinError(error))
    }
  }
}

export const signup = (formData, history, notification) => async dispatch => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(signupSuccess(data.token));
    notification.success({
      title: "Signup",
      text: "Signup success!"
    })
    history.push("/panel");
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch(signupError(error));
    }
  }
}

export const logout = (history, notification) => dispatch => {
  localStorage.removeItem('jwt_token');
  dispatch(logoutSuccess());
  notification.success({
    title: "Logout",
    text: "Logout success!"
  })
  history.push('/');
}

export const setTokenStore = (token) => dispatch => {
  dispatch(signinSuccess(token));
}

export const { authData, AuthSigninError, AuthSignupError, isAuthenticated } = state => state.auth;

export default slice.reducer;
