import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const navigate = useNavigate();

	const [toggle, setToggle] = useState(false);
	const [linkID, setLinkID] = useState(
		sessionStorage.getItem("idData") ? sessionStorage.getItem("idData") : 1
	);

	useEffect(() => {
		toggle
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [toggle]);

	const click = (id, url) => {
		navigate(url);
		setLinkID(id);
		const idData = sessionStorage.setItem("idData", id);
		setToggle(false);
	};

	return (
		<DataContext.Provider
			value={{
				toggle,
				setToggle,
				linkID,
				setLinkID,
				click,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
