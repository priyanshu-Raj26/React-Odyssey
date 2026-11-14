import Todo from "./components/ToDo/Todo";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
