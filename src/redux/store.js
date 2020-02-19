// -= BEFORE =-
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./cart/reducer";

// -= AFTER =-
import { configureStore } from "@reduxjs/toolkit";

// -= BEFORE =-
// const store = createStore(reducer, devToolsEnhancer());

// -= AFTER =-
const store = configureStore({ reducer: reducer });

export default store;
