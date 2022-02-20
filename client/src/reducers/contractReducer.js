import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'contract',
  initialState: {
    mainBalance: '0',
    balance: '0',
    contract: null,
  },
  reducers: {
    setTokenBalanceReducer: (state, action) => {
      state.balance = action.payload;
    }, 
    setCompanyTokenBalanceReducer: (state, action) => {
      state.mainBalance = action.payload;
    }
  }
});

export const { setTokenBalanceReducer, setCompanyTokenBalanceReducer } = slice.actions;

export const setTokenBalance = (balance) => async dispatch => {
  dispatch(setTokenBalanceReducer(balance));
}

export const setCompanyTokenBalance = (mainBalance) => async dispatch => {
  dispatch(setCompanyTokenBalanceReducer(mainBalance));
}
export const contract = state => state.contract;

export default slice.reducer;
