import './App.css';
import NoteList from './components/containers/NoteList';
import NotesForm from './components/containers/notesForm';

function App() {
  return (
    <div className="App">
      <NotesForm></NotesForm>
      <NoteList></NoteList>
    </div>
  );
}

export default App;
