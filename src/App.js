import { useDispatch } from "react-redux";
import "./App.css";
import NoteList from "./components/containers/NoteList";
import NotesForm from "./components/containers/notesForm";
import { filterNote } from "./store/actions/notesActions";

function App() {

  const dispatch = useDispatch();

  const filterSelected = (value) => {
    console.log(`[ APP ] Value selected: ${value}`);
    dispatch(filterNote(value));
  };

  return (
    <div className="App">
      <NotesForm></NotesForm>
      <div className="btn-group my-2 shadow">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterSelected("ALL")}
        >
          ALL
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterSelected("COMPLETED")}
        >
          COMPLETED
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterSelected("UNCOMPLETED")}
        >
          UNCOMPLETED
        </button>
      </div>
      <NoteList></NoteList>
    </div>
  );
}

export default App;
