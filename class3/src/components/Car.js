import PropTypes from "prop-types";

export const Car = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => {
            return (
              <tr key={i}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Car.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// npm install prop-types --save
// import PropTypes from "prop-types";
// Add the props
