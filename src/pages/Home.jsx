import React from "react";
import { Carousel, Display, TopCharts } from "../components";
import { popular } from "../components/constants/Popular";

const Home = () => {
	return (
		<div className=" ">
			<main className=" lg:flex lg:gap-10 lg:h-[375px]">
				<Display />
				<TopCharts />
			</main>
			<section className=" mt-10 mb-[100px] lg:mb-[150px] flex flex-col gap-6">
				<Carousel
					title="New Releases"
					popular={popular}
				/>
				<Carousel
					title="Popular in your area"
					popular={popular}
				/>
			</section>
		</div>
	);
};

export default Home;
