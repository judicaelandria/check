import React from "react";

const TaskContext = React.createContext();

/**
 * reducers
 */

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          completed: action.payload.completed,
        },
      ];
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

const TaskProvider = ({ children }) => {
  const datas = [
    {
      id: 1,
      name:
        "hello from the other side, and test for this thing if he is responsive,",
      completed: true,
    },
    {
      id: 2,
      name: "hmmm",
      completed: false,
    },
  ];
  const [state, dispatch] = React.useReducer(reducer, datas);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
