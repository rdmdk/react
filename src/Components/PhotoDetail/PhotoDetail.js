import React from "react";
import { Link } from "react-router-dom";

const PhotoDetail = ({ photo }) => (
	<div>
		<Link to="/photos">
			<img alt={`Detail ${photo.id}`} src={photo.url} />
		</Link>
	</div>
);

export default PhotoDetail;
