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

// Da kreirame aplikacija za kupuvanje na avtomobili
// Da imame eden del kaj sto direktorot na placot moze da
// vnesuva novi avtomobili i tie avtomobili da se listaat
// pri listanjeto pokraj brandot da ima kopce Buy
// Koga kje se klikne toa kopce avtomatski znaci kupuvanje
// na avtomobilot i prikazuvanje vo vtorata sekcija
// koja ja oznacuva kolekcijata na avtomobili na korisnikot
// isto taka i korisnikot ima opcija za prodavanje na
// avtomobilot preku kopceto Sell
// Isto taka vo komponentata za prikaz na avtomobilite
// da stavime prop types
