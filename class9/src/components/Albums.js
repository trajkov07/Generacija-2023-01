export const Albums = ({ albums, deleteAlbum }) => {
  return (
    <div>
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <p>ID: {album.id}</p>
            <h3>Title: {album.title}</h3>
            <button onClick={() => deleteAlbum(album)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
