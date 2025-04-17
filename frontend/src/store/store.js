import {configureStore} from "@reduxjs/toolkit";
import notesReducer from './Slices/noteSlice'
export const store = configureStore({
  reducer:{
    notes:notesReducer
  },
})
