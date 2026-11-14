import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/ToDo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task)); // Dispatch the addTodo action with the task as payload

    setTask(""); // Clear the input field after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
