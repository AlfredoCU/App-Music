import { useState, useEffect, useCallback } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import { getInformation } from "../helpers/index";
import { Form, Information, ImageArtist } from "../components/index";

const App = () => {
  const [search, setSearch] = useState({});
  const [info, setInfo] = useState({});

  const { artist } = search;

  const handleSearch = useCallback(
    (s) => {
      setSearch(s);
    },
    [setSearch]
  );

  useEffect(() => {
    if (!artist) return;

    const getData = async () => {
      const data = await getInformation(artist);
      setInfo(data);
    };

    getData();
  }, [artist, search]);

  return (
    <Container>
      <Form handleSearch={handleSearch} />

      {info ? (
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Information info={info} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageArtist info={info} />
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h5" className="not-found">
          No se encontraron resultados :(
        </Typography>
      )}
    </Container>
  );
};

export default App;
