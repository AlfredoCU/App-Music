import { func } from "prop-types";
import { TextField, Button, Grid } from "@material-ui/core";

import { useForm } from "../hooks/index";

const Form = ({ handleSearch }) => {
  const [values, handleValueChange] = useForm({ artist: "" });
  const { artist } = values;

  const submit = (e) => {
    e.preventDefault();

    if (artist.trim() === "") {
      return;
    }

    handleSearch(values);
  };

  return (
    <form onSubmit={submit}>
      <h1 className="title">Información de artistas musicales</h1>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="artist"
            name="artist"
            label="Artista"
            color="secondary"
            variant="outlined"
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="secondary"
            variant="contained"
          >
            Buscar artista
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

Form.propTypes = {
  handleSearch: func.isRequired,
};

export default Form;
