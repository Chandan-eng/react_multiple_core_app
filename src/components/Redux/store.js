import { createStore, combineReducers } from "redux";
import { studentSlice } from "./studentSlice";
import { counterSlice } from "../../Redux/counterSlice";
// Combine multiple reducers
const rootReducer = combineReducers({
  counter: counterSlice,
  students: studentSlice, // Add more slices as needed
});

// Create store with multiple slices
const store = createStore(rootReducer);

export default store;
