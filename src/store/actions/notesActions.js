export const CREATE_NOTE = "@note/create";
export const DELETE_NOTE = "@note/delete";
export const TOGGLE_NOTE = "@note/toggle";
export const FILTER_NOTE = "@note/filter";

export const createNote = (title, text) => {
  return {
    type: CREATE_NOTE,
    payload: {
      title,
      text,
      completed: false,
    },
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: {
      id,
    },
  };
};

export const toggleNote = (id) => {
  return {
    type: TOGGLE_NOTE,
    payload: {
      id,
    },
  };
};

export const filterNote = (filter) => {
  return {
    type: FILTER_NOTE,
    payload: {
      filter,
    },
  };
};
