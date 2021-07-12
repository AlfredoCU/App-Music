import axios from "axios";

export const getInformation = async (artist) => {
	try {
		const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURI(
			artist
		)}`;

		const { data } = await axios.get(url);
		return data.artists[0];
	} catch (error) {
		console.error(error);
	}
};
