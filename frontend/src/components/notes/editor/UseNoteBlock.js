import { useSelector } from "react-redux";

export default function useNoteBlock() {
  const { notesList } = useSelector((state) => state.notes);

  // Clean tag (remove leading /) and prepare renderable info
  const notesListToDisplay = notesList.map((note) => {
    const wrapper = note.tag.replace("/", ""); // "/h1" => "h1"
    return {
      wrapper,
      content: note.content,
    };
  });

  return { notesListToDisplay };
}
