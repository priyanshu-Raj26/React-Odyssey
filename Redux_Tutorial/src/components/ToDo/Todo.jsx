import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../../Features/ToDo/todoSlice";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h2>Todos List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button> &nbsp;
            <button onClick={() => dispatch(markAsDone(todo.id))}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
