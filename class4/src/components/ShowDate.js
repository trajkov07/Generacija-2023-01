export const ShowDate = (props) => {
  return (
    <div>
      {props.dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })}
    </div>
  );
};

// Da se napravi komponenta Counter
// neka ima nekoj h1 element koj sto kje pokazuva
// nekoja vrednost (na pocetok neka bide 1)
// Da stavime dve kopcinja pod nego, koe ednoto
// kje ja zgolemuva vrednosta za 1
// drugoto kje ja namaluva vrednosta za 2

// da stavime i treto kopce koe sto kje ja
// resetira vrednosta
