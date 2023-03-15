import axios from "axios";
import { useState, useEffect } from "react";

export const Motivation = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => setQuotes(res.data))
      .catch((error) => console.log(error));
  }, []);

  // So axios da gi fetchuvame site todos i da gi prikazime na ekran
  // npm install axios

  return (
    <div>
      <h1>Motivation quotes!</h1>
      {quotes.map((quote, i) => {
        return (
          <div key={i}>
            <h3>{quote.text}</h3>
            <p>Said by the great {quote.author}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
