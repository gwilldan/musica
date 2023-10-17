import React from "react";
import { Display, TopCharts } from "../components";

const Home = () => {
	return (
		<div className="">
			<main className=" lg:flex lg:gap-10">
				<Display />
				<TopCharts />
			</main>
		</div>
	);
};

export default Home;
