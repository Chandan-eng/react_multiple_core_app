import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const storenew =configureStore({
reducer:{
    counter:counterSlice
}
})

export default storenew;