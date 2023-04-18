import React from "react";
import { useSelector } from "react-redux";
import Note from "../pure/note";

const NoteList = () => {
  const notes = useSelector(({ notes, filter }) => {
    console.log(`[ NoteList - State ] notesState: `);
    console.table(notes);
    console.log(`[ NoteList - State ] filerState: "${filter}"`);
    switch (filter) {
      case "ALL":
        return notes;
      case "COMPLETED":
        return notes.filter((note) => note.completed);
      case "UNCOMPLETED":
        return notes.filter((note) => !note.completed);
      default:
        return notes;
    }
  });

  return (
    <div className="col-12 col-md-12 mx-auto">
      <div className="list-group col-6 col-md-6 mt-2 mb-2 mx-auto">
        {notes.length > 0 ? (
          notes.map((note) => (
            <button
              key={note.id}
              type="button"
              className="list-group-item list-group-item-action "
              aria-current="true"
            >
              <Note note={note}></Note>
            </button>
          ))
        ) : (
          <h2 className="text-center mt-3">CREATE NEW NOTES</h2>
        )}
      </div>
    </div>
  );
};

export default NoteList;