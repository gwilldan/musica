import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [toggle, setToggle] = useState(false);
	const [linkID, setLinkID] = useState(
		sessionStorage.getItem("idData") ? sessionStorage.getItem("idData") : 1
	);

	return (
		<DataContext.Provider
			value={{
				toggle,
				setToggle,
				linkID,
				setLinkID,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
