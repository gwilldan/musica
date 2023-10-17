import React from "react";
import { TopMix } from "./constants/TopMix";

const TopCharts = () => {
	return (
		<aside className=" mt-10 lg:mt-0">
			<h1 className=" text-mainWhite font-bold text-2xl"> Top Mix</h1>
			<ul>
				{TopMix.map((i, index) => (
					<li key={index}></li>
				))}
			</ul>
		</aside>
	);
};

export default TopCharts;
