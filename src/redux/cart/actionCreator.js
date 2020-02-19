//-= BEFORE =-

// import { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART } from "./type";

// const addGood = id => ({
//   type: ADD_GOOD_TO_CART,
//   payload: id
// });

// const deleteGood = id => ({
//   type: DELETE_GOOD_FROM_CART,
//   payload: id
// });

// -= AFTER =-
import { createAction } from "@reduxjs/toolkit";

const addGood = createAction("ADD_GOOD_TO_CART");
const deleteGood = createAction("DELETE_GOOD_FROM_CART");

export { addGood, deleteGood };
