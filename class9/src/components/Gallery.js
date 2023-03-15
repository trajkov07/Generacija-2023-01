import { Popup } from "./Popup";

export const Gallery = ({
  listOfPhotos,
  setSelectedPhoto,
  selectedPhoto,
  closePhoto,
}) => {
  console.log(selectedPhoto);
  return (
    <div>
      {listOfPhotos.slice(0, 50).map((photo) => {
        return (
          <div key={photo.id} onClick={() => setSelectedPhoto(photo)}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}

      {selectedPhoto !== "" && (
        <Popup image={selectedPhoto} closePhoto={closePhoto} />
      )}
    </div>
  );
};
