import React, { useState } from 'react';
import './Todolist.css';

function Todolist() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);     // <-- Track which todo is being edited
  const [editInputValue, setEditInputValue] = useState(""); // <-- Track edit text

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleAddTodos = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setinputValue("");
    }
  };

  const handleToggleChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEditTodo = (id, currentText) => {
    setEditTodoId(id);
    setEditInputValue(currentText);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodoId ? { ...todo, text: editInputValue } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);          // Exit edit mode
    setEditInputValue("");        // Clear edit field
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="todo-container">
        <h1>Todo List</h1>

        <div className="todo-input">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter task"
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodos}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item${todo.completed ? " completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleChange(todo.id)}
              />

              {editTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                  />
                  <button onClick={handleUpdateTodo}>Save</button>
                </>
              ) : (
                <>
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                    Edit
                  </button>
                </>
              )}

              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
