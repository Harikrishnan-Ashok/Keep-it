import { createSlice } from "@reduxjs/toolkit";

const noteBlock = {
  tag: "/p",
  content: "test"
};

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [noteBlock]
  },
  reducers: {
    updateNotes: (state, action) => {
      const { tag, content } = action.payload;
      const newBlock = { tag, content }; 
      state.notesList.push(newBlock); 
    }
  }
});

export const { updateNotes } = noteSlice.actions;
export default noteSlice.reducer;
