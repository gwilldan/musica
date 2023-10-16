import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Display = () => {
	const { toggle } = useContext(DataContext);
	// console.log(toggle);
	return <div>Display</div>;
};

export default Display;
