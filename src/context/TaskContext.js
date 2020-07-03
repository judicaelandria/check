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
      id: Math.round(Math.random() * 10000),
      name: "Start using this website,",
      completed: true,
    },
    {
      id: Math.round(Math.random() * 10000),
      name: "create my first task",
      completed: true,
    },
    {
      id: Math.round(Math.random() * 10000),
      name: "Do your thing now",
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
