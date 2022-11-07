import { func } from "prop-types";
import { TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "../hooks/index";

const Form = ({ handleSearch }) => {
  const [values, handleValueChange] = useForm({ artist: "", song: "" });
  const { artist, song } = values;

  const submit = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      return;
    }

    handleSearch(values);
  };

  return (
    <form onSubmit={submit}>
      <h1 className="title">Artistas y letras de canciones</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="song"
            name="song"
            label="Canción"
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
            variant="contained"
            color="secondary"
          >
            Buscar
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
