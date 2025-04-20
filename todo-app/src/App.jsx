import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <input
          type="text"
          placeholder="Add Task .."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
