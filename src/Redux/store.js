import { createStore } from "redux";
import { counterSlice } from './counterSlice';

const store=createStore(counterSlice)

export default store;