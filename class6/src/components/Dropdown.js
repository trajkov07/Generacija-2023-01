export const Dropdown = ({ options, onChange }) => {
  return (
    <div>
      <label>Choose an app:</label>
      <select onChange={onChange}>
        {options.map((option, i) => {
          return (
            <option value={option.name} key={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
