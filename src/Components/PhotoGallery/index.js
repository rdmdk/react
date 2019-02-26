import React, { Component } from "react";
import { fetchPhotos } from "../../api/photos";
import Loading from "../Loading";
import PhotoGallery from "./PhotoGallery";

class PhotoGalleryContainer extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetchPhotos().then(photos => this.setState({ photos }));
    }

    render(){
        const { photos } = this.state;
        const { match } = this.props;
        if (!photos.length) return <Loading />;

        return <PhotoGallery photos={this.state.photos} match={match} />;
    }
}

export default PhotoGalleryContainer;