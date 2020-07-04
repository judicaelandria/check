import React from "react";

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState(
    () => JSON.parse(window.localStorage.getItem("tasks")) || []
  );
  /**
   * persist local storage
   */
  React.useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
