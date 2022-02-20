// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import { authReducer } from "./reducers/authReducer";
// const middleWare = [thunk];

// const store = createStore(authReducer, applyMiddleware(...middleWare));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import contractReducer from "./reducers/contractReducer";

import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({
  reducer: {
    auth: authReducer,
    contract: contractReducer,
  }, 
}, composeWithDevTools());