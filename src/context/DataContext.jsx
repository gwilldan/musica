import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const navigate = useNavigate();
	const [favouritePlaylist, setFavouritePlaylist] = useState([]);
	const [favToggle, setFavToggle] = useState(false);
	const [favPlayName, setFavPlayName] = useState();
	const [toggle, setToggle] = useState(false);
	const [linkID, setLinkID] = useState(
		sessionStorage.getItem("idData") ? sessionStorage.getItem("idData") : 1
	);

	useEffect(() => {
		// console.log(localStorage.getItem("favouritePlaylist"));
	}, [favouritePlaylist]);

	// use Effect for making turning off scroll on mobile nav coming on
	useEffect(() => {
		toggle
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [toggle]);

	useEffect(() => {
		localStorage.setItem("favouritePlaylist", favouritePlaylist);
		console.log(favouritePlaylist);
	}, [favouritePlaylist]);

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
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
