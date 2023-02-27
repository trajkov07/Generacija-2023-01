export const Todos = ({ listOfTodos, markTodoAsDone }) => {
  return (
    <ol>
      {listOfTodos.map((todo, i) => {
        return (
          <li key={i}>
            <span>{todo.text}</span>
            <input
              type="checkbox"
              value={todo.done}
              checked={todo.done}
              onChange={() => {
                markTodoAsDone(todo);
              }}
            />
          </li>
        );
      })}
    </ol>
  );
};
