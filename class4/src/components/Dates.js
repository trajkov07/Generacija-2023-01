import { useState } from "react";
import { ShowDate } from "./ShowDate";

export const Dates = () => {
  const [dates, setDates] = useState([]);

  const addDate = () => {
    let date = new Date().toString();
    // this copies everything we have from dates to newDates
    var newDates = [...dates];
    newDates.push(date);
    setDates(newDates);
  };

  return (
    <div>
      {/* {dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })} */}
      <ShowDate dates={dates} />
      <button onClick={addDate}>Add Date</button>
    </div>
  );
};
