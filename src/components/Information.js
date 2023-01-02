import { shape, string } from "prop-types";
import { Typography } from "@material-ui/core";

const Information = ({ info }) => (
  <div className="content">
    <Typography variant="h5" className="title">
      {info?.strArtist}
    </Typography>

    <Typography variant="body2">{info?.strCountry}</Typography>

    <div className="info">
      <Typography variant="body1" align="justify">
        {info?.strBiographyES}
      </Typography>
    </div>
  </div>
);

Information.propTypes = {
  info: shape({
    strArtist: string,
    strCountry: string,
    strBiographyES: string,
  }),
};

Information.defaultProps = {
  info: {},
};

export default Information;
