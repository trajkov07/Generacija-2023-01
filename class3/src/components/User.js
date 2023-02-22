import PropTypes from "prop-types";

export const User = (props) => {
  console.log(props);
  return (
    <div>
      {props.showUser ? (
        <div>
          <p>Name: {props.user1.name}</p>
          <p>Age: {props.user1.age}</p>
          <p>Adress: {props.user1.adress}</p>
        </div>
      ) : (
        <div>
          <p>Name: {props.user2.name}</p>
          <p>Age: {props.user2.age}</p>
          <p>Adress: {props.user2.adress}</p>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  showUser: PropTypes.bool.isRequired,
  user1: PropTypes.object,
  user2: PropTypes.object.isRequired,
};

User.defaultProps = {
  user1: { name: "Default Name", age: 0, adress: "Default Adress" },
};

// Da dodademe propTypes za Comments komponentata
// Pokraj listata so komentari, prakajte i boolean
// property koe dokolku e false da pokazuva nekoja h1
// element so tekst You don't have access
// no stavete i default props da ako boolean propety-to
// ne e prateno po default da bide false

// Neka imame nekoja student komponenta
// neka za studentot cuvame name/lastName / index
// neka prakame preku parent komponenta nekoja lista
// na studenti i vo student komponentata da ja prikazime
// ovaa lista vo tabela
// pokraj listata da prakame i uste edno property
// koe kje bide semestar, i kje se prikazuva na ekranot
// posle tabelata
// Da staime PropTypes za studentite i da bide required
// Neka ima i za semestarot PropTypes
// dokolku ne go pratime semestarot sekogas da se ispisuyva
// zimski
