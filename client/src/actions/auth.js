import * as actions from "./types";
import * as api from "../api/index";
export const signup = (formdata, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formdata);

    dispatch({ type: actions.AUTH, data });
    history.push("/");
  } catch (err) {
    console.log(err.response.data.msg);
    const error = err.response.data.msg;
    if (error) {
      dispatch({ type: actions.LOGIN_FAIL, error });
    }
  }
};

export const signin = (formdata, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formdata);

    dispatch({ type: actions.AUTH, data });
    history.push("/");
  } catch (err) {
    console.log(err.response.data.msg);
    const error = err.response.data.msg;
    if (error) {
      dispatch({ type: actions.LOGIN_FAIL, error });
    }
  }
};


