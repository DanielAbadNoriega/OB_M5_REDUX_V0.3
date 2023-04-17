import React from "react";
import { useDispatch } from "react-redux";
import { toggleNote } from "../../store/actions/notesActions";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(toggleNote(note.id));
  };

  return (
    <div>
      <div className="card-body">
        <h2 className="card-title my-auto mt-2 ms-2">{note.title}</h2>
        <hr></hr>
        <p className="card-text ms-2 mb-2"> {note.text}</p>
        <div className="form-check form-switch">
          <input
            className={`form-check-input ${
              note.completed ? "bg-success" : "bg-danger"
            }`}
            style={{ cursor: "pointer" }}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleComplete}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {note.completed ? "COMPLETED" : "UNCOMPLETED"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Note;