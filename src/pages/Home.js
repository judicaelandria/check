import React from "react";
import styled from "styled-components";
import { Layout } from "../containers/Layout";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { CheckCard } from "../components/CheckCard";
import { TaskContext } from "../context/TaskContext";
import { FormattedMessage } from "react-intl";

const Home = () => {
  const initialState = { id: null, name: "", completed: false };
  const [form, setForm] = React.useState(initialState);
  const { tasks, setTasks } = React.useContext(TaskContext);

  /**
   * table
   */

  //handle form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //add task
const createTask = () => {
    if(form.name){
    const task = {
      id: Math.round(Math.random() * 10000),
      name: form.name,
      completed: false,
    };
    setTasks([...tasks, task]);
    setForm(initialState);
  }};

  //function delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //function update task
  const updateTask = (id, data) => {
    data.completed = !data.completed;
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  return (
    <Layout>
      <Wrapper>
        <FormWrapper>
        <FormattedMessage id="Home.taskName"  defaultMessage="Task Name">
          { placeholder =>(  <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={placeholder}
          />)}
      </FormattedMessage>  
        <Button onClick={createTask}><FormattedMessage id="Home.addNewTask" /></Button>
        </FormWrapper>
        {tasks.length > 0 ? (
          tasks.map((data) => (
            <CheckCard
              key={data.id}
              title={data.name}
              value={data.completed}
              onClick={() => deleteTask(data.id)}
              onChange={() => updateTask(data.id, data)}
            />
          ))
        ) : (
          <div
            style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}
          >
          {<FormattedMessage id="Home.noTask" defaultMessage="you have no task yet. Add a new one!" />}          
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default Home;
