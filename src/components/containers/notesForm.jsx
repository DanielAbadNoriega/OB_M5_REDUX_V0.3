import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { createNote } from "../../store/actions/notesActions";

const NotesForm = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    console.log("Entro");
    e.preventDefault();
    const { title, text } = e.target;
    dispatch(createNote(title.value, text.value));
  };

  const notesDefault = () => {
    dispatch(createNote("Note 1", "My note 1"));
    dispatch(createNote("Note 2", "My note 2"));
    dispatch(createNote("Note 3", "My note 3"));
    dispatch(createNote("Note 4", "My note 4"));
  };

  return (
    <>
      <h1>React JS: Redux</h1>
      <Form onSubmit={addNote}>
        <InputGroup className="mx-auto my-2 p-2 w-50">
          <InputGroup.Text>Title</InputGroup.Text>
          <Form.Control
            placeholder="New note"
            aria-label="New note"
            name="title"
            autoFocus
          />
        </InputGroup>
        <InputGroup className="mx-auto my-2 p-2 w-50">
          <InputGroup.Text>Text</InputGroup.Text>
          <Form.Control
            placeholder="Write text"
            aria-label="Text note"
            name="text"
          />
        </InputGroup>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" type="submit">
            NEW
          </button>
          <button
            className="btn btn-info mx-2"
            type="button"
            onClick={notesDefault}
          >
            DEFAULT
          </button>
        </div>
      </Form>
    </>
  );
};

export default NotesForm;
