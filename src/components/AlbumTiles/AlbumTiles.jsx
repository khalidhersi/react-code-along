import React from "react";

import "./AlbumTiles.scss";

import { Link } from "react-router-dom";

const AlbumTiles = props => {
  const { title, albumsArr } = props;

  const cardListJSX = albumsArr.map((album, index) => (
    <Link to={`/album/${album.idAlbum}`}>
      <img className="album-tiles__img" key={title + (index + 1)} src={album.strAlbumThumb} alt={album.strAlbum} />
    </Link>
  ));
  return (
    <>
      <h3>{title}</h3>
      <div className="album-tiles">{cardListJSX}</div>
    </>
  );
};

export default AlbumTiles;