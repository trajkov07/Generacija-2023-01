import PropTypes from "prop-types";

export function Sport({ name, sport }) {
  //   console.log(props);
  //   const name = props.name;
  //   const sport = props.sport;
  return (
    <div>
      <h1>My name is {name}.</h1>
      <h3>My favourite sport is {sport}</h3>
    </div>
  );
}

Sport.propTypes = {
  name: PropTypes.string.isRequired,
  sport: PropTypes.string,
};

Sport.defaultProps = {
  name: "Default Name",
  sport: "Default Sport",
};
