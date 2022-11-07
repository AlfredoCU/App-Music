import axios from "axios";

export const getLyrics = async (artist, song) => {
  try {
    const url = `https://api.lyrics.ovh/v1/${encodeURI(artist)}/${encodeURI(
      song
    )}`;

    const { data } = await axios.get(url);
    return data.lyrics;
  } catch (error) {
    console.error("GET_LYRICS_ERROR", error);
  }
};
