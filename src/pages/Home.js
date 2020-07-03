import React from "react";
import styled from "styled-components";
import { Layout } from "../containers/Layout";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { CheckCard } from "../components/CheckCard";
import { TaskContext } from "../context/TaskContext";

const Home = () => {
  const initialState = { id: null, name: "", completed: false };
  const [form, setForm] = React.useState(initialState);
  const { state, dispatch } = React.useContext(TaskContext);

  //handle form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //add task
  const createTask = () => {
    if(!form.name) return
    dispatch({
      type: "add",
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        completed: form.completed,
      },
    });
    setForm(initialState);
  };

  //function delete task
  const deleteTask = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };

  //function update task
  const updateTask = (id, data) => {
    data.completed = !data.completed;
    dispatch({
      type: "finish",
      payload: {
        id: id,
        data,
      },
    });
  };

  return (
    <Layout>
      <Wrapper>
        <FormWrapper>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Task name"
          />
          <Button onClick={createTask}>Add new Task</Button>
        </FormWrapper>
        {state.length > 0 ? (
          state.map((data) => (
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
            style={{ fontSize: "24px", fontWeight: "800", marginTop: "20px" }}
          >
            you have no task yet. Add a new one
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
