import {
  INITIALIZE,
  ADD_TITLE,
  TOOGLE,
  REMOVE,
  REQUEST_FETCH_ADD,
  REQUEST_FETCH_ADD_ITEM
} from "./action-types";

const init = { loading: false, todos: [] };

export default (state = init, action) => {
  switch (action.type) {
    case REQUEST_FETCH_ADD:
      return {
        ...state,
        loading: !state.loading
      };
    case REQUEST_FETCH_ADD_ITEM:
      return {
        ...state,
        loading: !state.loading
      };
    case INITIALIZE:
      return {
        ...state,
        todos: state.todos.concat(action.todos),
        loading: !state.loading
      };
    case ADD_TITLE:
      return {
        ...state,
        todos: state.todos.concat([
          {
            id: action.obj._id,
            title: action.obj.title,
            date: action.obj.date,
            completed: action.obj.completed
          }
        ]),
        loading: !state.loading
      };

    case TOOGLE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    case REMOVE:
      return {...state,
        todos:state.todos.filter(todo => todo._id !== action.id)
      }
    default:
      return state;
  }
};
