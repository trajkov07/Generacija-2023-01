export function Sport2(props) {
  console.log(props);
  return (
    <div>
      {props.sports.map((object, i) => {
        return (
          <div>
            <h1>My name is {object.name}.</h1>
            <h3>My favourite sport is {object.sport}</h3>
          </div>
        );
      })}
    </div>
  );
}

// Komponenta za komentari, komentarite neka imaat id, avtor i sodrzina
// preku druga komponenta da pratime lista na komentari i vo komponentata
// da ja izminime taa lista i da gi prikazime site informacii
// neka bide vo nekoja tabela

// bonus: za sekoj komentar neka ima nekoe kopce so ime Like
// koe kje ispisuva vo konzola LIKE
