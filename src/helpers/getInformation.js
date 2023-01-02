import axios from "axios";

export const getInformation = async (artist) => {
  try {
    const API_URL = "https://www.theaudiodb.com/api/v1/json/2/search.php";
    const { data } = await axios.get(`${API_URL}?s=${encodeURI(artist)}`);
    return data.artists[0];
  } catch (error) {
    console.error("GET_INFORMATION_ERROR", error);
  }
};
