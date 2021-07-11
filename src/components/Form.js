// import { useForm } from "../hooks/index";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

const Form = () => {
  return (
    <FormControl>
      <InputLabel htmlFor=""></InputLabel>
      <Input />
      <Button variant="contained" color="primary">
        Hola
      </Button>
    </FormControl>
  );
};
// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
// https://www.theaudiodb.com/api_guide.php
// https://material-ui.com/es/api/form-control/
// https://material-ui.com/components/text-fields/
export default Form;
