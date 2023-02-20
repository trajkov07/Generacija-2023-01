export function Player({ player: { firstName, print } }) {
  //   console.log(props);

  return (
    <div>
      <h1>Player name is {firstName}!</h1>
      <button onClick={print}>Print Player score</button>
    </div>
  );
}
