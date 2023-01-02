import { shape, string } from "prop-types";

const ImageArtist = ({ info }) => (
  <img
    alt={info?.strArtist}
    className="img-artist"
    src={info?.strArtistCutout}
  />
);

ImageArtist.propTypes = {
  info: shape({
    strArtist: string,
    strArtistCutout: string,
  }),
};

ImageArtist.defaultProps = {
  info: {},
};

export default ImageArtist;
