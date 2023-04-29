import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Wake up!", "Code", "Eat", "Sleep"]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const handleInputChange = (event) => setInputValue(event.target.value);

  return (
    <div>
      <h1>To Do App</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
