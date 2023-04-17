import {
  CREATE_NOTE,
  DELETE_NOTE,
  TOGGLE_NOTE,
  FILTER_NOTE,
} from "../actions/notesActions";

let initialState = [];
let notesIds = [];
let randomId = () => {
  let newRandom = () => Math.floor(Math.random() * 9999999) - 1;
  let newId = newRandom();
  while (notesIds.includes(newId)) {
    newId = newRandom();
  }
  notesIds = [...notesIds, newId];
  return newId;
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          title: action.payload.title,
          text: action.payload.text,
          completed: action.payload.completed,
          id: randomId(),
        },
      ];

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);

    case FILTER_NOTE:
      return state.filter((note) => note.id !== action.payload.id);

    case TOGGLE_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, completed: !note.completed }
          : note
      );

    default:
      return state;
  }
};
