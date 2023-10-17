import React from "react";
import { TopMix } from "./constants/TopMix";

const TopCharts = () => {
	return (
		<aside className=" mt-10 lg:mt-0 lg:flex-1">
			<h1 className=" text-mainWhite font-bold text-2xl"> Top Mix</h1>
			<section className=" overflow-x-auto no-scrollbar my-3">
				<ul className=" flex gap-5 lg:flex-col">
					{TopMix.map((i, index) => (
						<li
							key={index}
							className=" w-[270px] h-[240px] bg-dimDark flex-shrink-0 lg:flex-shrink rounded-3xl p-4">
							{i.name}
						</li>
					))}
				</ul>
			</section>
		</aside>
	);
};

export default TopCharts;
