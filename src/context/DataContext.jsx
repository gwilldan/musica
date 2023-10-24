import { useEffect, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newReleases } from "../components/constants/NewReleases";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const navigate = useNavigate();
	const [favouritePlaylist, setFavouritePlaylist] = useState(
		localStorage.getItem("favouritePlaylist")
			? JSON.parse(localStorage.getItem("favouritePlaylist"))
			: []
	);
	const [shuffleToggle, setShuffleToggle] = useState(false);
	const [repeatToggle, setRepeatToggle] = useState(false);
	const [playing, setPlaying] = useState(
		localStorage.getItem("playing")
			? JSON.parse(localStorage.getItem("playing"))
			: newReleases[0]
	);
	const [playPauseToggle, setPlayPauseToggle] = useState(false);
	const [favToggle, setFavToggle] = useState(false);
	const [favPlayName, setFavPlayName] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [linkID, setLinkID] = useState(
		sessionStorage.getItem("idData") ? sessionStorage.getItem("idData") : 1
	);
	// const [] = useState([])

	const audioRef = useRef();

	useEffect(() => {
		localStorage.setItem(
			"favouritePlaylist",
			JSON.stringify(favouritePlaylist)
		);
	}, [favouritePlaylist]);

	// use Effect for making turning off scroll on mobile nav coming on
	useEffect(() => {
		toggle
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [toggle]);

	// use Effect for updating playlist to local storage localstorage
	useEffect(() => {
		localStorage.setItem("playing", JSON.stringify(playing));
	}, [playing]);

	// USE Effect for playing current song
	useEffect(() => {
		if (playPauseToggle) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [playPauseToggle, playing]);

	const click = (id, url) => {
		navigate(url);
		setLinkID(id);
		const idData = sessionStorage.setItem("idData", id);
		setToggle(false);
	};

	const setFavourite = (favouriteName) => {
		const newMap = favouritePlaylist.includes(favouriteName);
		if (!newMap) {
			setFavouritePlaylist([...favouritePlaylist, favouriteName]);
		} else {
			setFavouritePlaylist(
				favouritePlaylist.filter((i) => i !== favouriteName)
			);
		}
	};

	const shuffle = () => {
		setShuffleToggle(!shuffleToggle);
	};
	const repeat = () => {
		setRepeatToggle(!repeatToggle);
	};

	const next = () => {
		// setRepeatToggle(!repeatToggle);
	};

	const prev = () => {
		// setRepeatToggle(!repeatToggle);
	};

	const setPlay = (song, playlist) => {
		const play = playlist.map((i) => i.name == song && setPlaying(i));
		setPlayPauseToggle(true);
	};

	const playPause = () => {
		setPlayPauseToggle(!playPauseToggle);
	};

	console.log(playing);

	return (
		<DataContext.Provider
			value={{
				toggle,
				setToggle,
				linkID,
				setLinkID,
				click,
				setFavourite,
				favToggle,
				favPlayName,
				favouritePlaylist,
				shuffle,
				shuffleToggle,
				repeat,
				repeatToggle,
				next,
				prev,
				playing,
				setPlay,
				playPause,
				audioRef,
				playPauseToggle,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
