import { FILTER_NOTE } from "../actions/notesActions";

const initialState = "ALL";

export const filterNotesReducer = (state = initialState, action) => {
  console.log(
    `[ FilterNotesReducer ] State: ${state}, Action: ${JSON.stringify(action)}`
  );
  switch (action.type) {
    case FILTER_NOTE:
      return action.payload.filter;

    default:
      return state;
  }
};
