import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import vector from "../assets/vector.svg";

const Display = () => {
	const {} = useContext(DataContext);
	return (
		<main className="h-[505px] lg:h-[373px] max-w-[615px] w-full bg-mainGreen rounded-[40px] text-mainWhite font-medium px-[34px] py-[36px] relative overflow-hidden">
			<img
				src={vector}
				className="h-[200px] absolute top-[-50px] right-[-80px] rotate-90"
			/>
			<section className=" md:w-[180px] flex flex-col h-full md:justify-between gap-10">
				<div className=" flex-1 md:flex-grow-0">
					<p>Curated playlist</p>
				</div>
				<div>
					<h1 className=" text-4xl font-bold">R & B Hits</h1>
					<p className="md:text-sm ">
						All mine, Lie again, Petty call me everyday, Out of time, No love,
						Bad habit, adn so much more
					</p>
				</div>

				<div className=" h-9 border"></div>
			</section>
		</main>
	);
};

export default Display;
