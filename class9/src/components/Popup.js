export const Popup = ({ image, closePhoto }) => {
  console.log(image);
  return (
    <div id="popup">
      <button onClick={() => closePhoto()}>&times;</button>
      <div className="popup-container">
        <img src={image.url} alt="full size image" />
      </div>
    </div>
  );
};
