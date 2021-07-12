import { useState, useEffect, useCallback } from "react";
import { Container, Grid } from "@material-ui/core";
import { getInformation, getLyrics } from "../helpers/index";
import { Form, Information, Lyrics } from "../components/index";

const App = () => {
	const [search, setSearch] = useState({});
	const [lyrics, setLyrics] = useState("");
	const [info, setInfo] = useState({});

	const { artist, song } = search;

	const handleSearch = useCallback(
		(s) => {
			setSearch(s);
		},
		[setSearch]
	);

	useEffect(() => {
		if (Object.keys(search).length === 0) return;

		const getData = async () => {
			const [data1, information] = await Promise.all([
				getLyrics(artist, song),
				getInformation(artist),
			]);

			setLyrics(data1);
			setInfo(information);
		};

		getData();
	}, [artist, song, search]);

	return (
		<Container>
			<Form handleSearch={handleSearch} />
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Information info={info} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Lyrics lyrics={lyrics} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
