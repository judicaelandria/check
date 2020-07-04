export function reducer(state, action) {
  switch (action.type) {
    case "fetch":
      return state;
    case "reset":
      return window.localStorage.clear();
    case "add":
      return { ...state, task: action.payload.task };
    case "finish":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload.data : task
      );
    case "delete":
      return [...state.filter((task) => task.id !== action.payload.id)];
    default:
      return state;
  }
}
