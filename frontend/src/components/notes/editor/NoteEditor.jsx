import { Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateNotes } from "../../../store/Slices/noteSlice";
import useNoteBlock from "./UseNoteBlock";

export default function NoteEditor() {
  const dispatch = useDispatch();
  const { notesListToDisplay } = useNoteBlock();
  console.log(notesListToDisplay)

  return (
    <Stack>
      {notesListToDisplay.map((block, index) => {
        const Tag = block.wrapper;
        return <Tag key={index}>{block.content}</Tag>;
      })}

      <button
        onClick={() => dispatch(updateNotes({ tag: "/h1", content: "hello" }))}
      >
        Click
      </button>
    </Stack>
  );
}
