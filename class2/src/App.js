import "./css/example.css";
import { AppClass } from "./AppClass";
import { Hello } from "./components/Hello";
import { HelloInMacedonian } from "./components/HelloInMacedonian";
import { Goodbye } from "./components/Goodbye";

// Components name must be in capital
function App() {
  let number = 10;
  const element = <h1>Hello from Javascript React!</h1>;

  const student = {
    name: "Laura",
    lastName: "Angelova",
    image:
      "https://innerbody.imgix.net/MU-Female-Anterior_0.png?w=313&auto=format",
  };

  function studentFullName(student) {
    return student.name + " " + student.lastName;
  }

  const print = () => {
    console.log("Hello from the console");
  };

  return (
    <div style={{ marginLeft: 10 }}>
      {/* <h1>Hello from Martin</h1>
      <h2 className="hello">Hello from React!!</h2>
      <p>5 + 5</p>
      <p> The result is: {5 + 5 - number} </p>
      {element}
      <h2>Hello, {studentFullName(student)}</h2>
      <button onClick={print}>Click me</button>
      <img src={student.image} style={{ width: 300, height: 300 }}></img>
      <a target="_blank" rel="noreferrer" href="http://www.google.com">
        Google
      </a>
      <AppClass /> */}
      <Hello name="Martin" />
      <Hello name="Laura" />
      <Hello name="Martin1" />
      <Hello name="Martin2" />
      <Hello name="Martin" />
      {/* <HelloInMacedonian />
      <Goodbye /> */}
    </div>
  );
}

// Kreirate komponenta kade vo nekoj element stavete gi vasite 3 hobija
// potoa da kreirame druga komponenta kade vo nekoj element kje
// go stavite vaseto omileno hobi
// i da kreirame treta komponenta kade sto kje napisime nekoj
// tekst my favourite hoby i stavete nekoja slika od vasevo hoby

// Da stavime nekoj css koj kje go fati omilenoto hoby po id i kje
//go oboi vo nekoja boja
// Da stavime nekoj css koj kje ja fati listata na hobija po klasa
//i kje gi oboi vo druga boja
// Koga kje se napravi hover na slikata od hobito da
//se ispecati vo konzola, this is my hoby

export default App;
