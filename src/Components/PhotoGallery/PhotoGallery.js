import React from "react";
import "./PhotoGallery.css";
import Thumbnail from "./Thumbnail";

const PhotoGallery = ({ photos, match }) => {
  return (
    // Immediate children need to be enclosed in a tag. Alternatively React.Fragment solves this without creating an additional element tag
    <React.Fragment>
      <h1>Gallery</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="gallery">
        {photos.map(photo => (
          <Thumbnail
            key={photo.id}
            to={`${match.url}/${photo.id}`}
            image={photo.thumbnailUrl}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PhotoGallery;
