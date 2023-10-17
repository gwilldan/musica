import React from "react";
import { Display, TopCharts } from "../components";

const Home = () => {
	return (
		<div className=" ">
			<main className=" lg:flex lg:gap-10 lg:h-[375px]">
				<Display />
				<TopCharts />
			</main>
			<div className="h-screen">hello</div>
		</div>
	);
};

export default Home;
