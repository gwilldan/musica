import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import vector from "../assets/vector.svg";
import { RandBImage } from "./constants/RandBImage";
import { ImHeart } from "react-icons/im";

const Display = () => {
	const {} = useContext(DataContext);
	return (
		<main className=" h-[505px] lg:h-[373px] w-full lg:w-[80%] bg-mainGreen lg:max-w-[785px] rounded-[40px] text-mainWhite font-medium px-[34px] py-[36px] relative overflow-hidden">
			<img
				src={vector}
				className="h-[200px] absolute top-[-50px] right-[-80px] rotate-90"
			/>
			<section className=" md:w-[200px] flex flex-col h-full md:justify-between gap-10">
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

				<div className=" h-9 flex gap-3 items-center">
					<div className=" flex items-center">
						{RandBImage.map((i, index) => (
							<div
								className="w-8 h-8 lg:h-6 lg:w-6 rounded-full ml-[-5px] overflow-hidden"
								key={index}>
								<img
									src={i}
									alt=""
									className="w-8 lg:w-6"
								/>
							</div>
						))}
					</div>
					<ImHeart className=" text-xl lg:text-sm" />
					<p className=" text-xl font-normal lg:text-sm">33K likes</p>
				</div>
			</section>
		</main>
	);
};

export default Display;
