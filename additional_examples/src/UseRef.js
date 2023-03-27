import { useRef, useEffect } from "react";
export const UseRef = () => {
  // create a ref
  const counter = useRef(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    counter.current = counter.current + 1;
    console.log(counter.current);
  };

  const divElement = useRef();

  // trigger on the first render of the component
  useEffect(() => {
    // get the height of the div element
    console.log("The height of the div is: ", divElement.current.offsetHeight);
  }, []);
  return (
    <div>
      {
        // its not shown because useRef does not get rendered
      }
      <h2>Value: {counter.current}</h2>
      <button onClick={handleIncreaseCounter}>Increase counter</button>
      <div ref={divElement}>
        <h1>Learn about useRef!</h1>
      </div>
    </div>
  );
};
