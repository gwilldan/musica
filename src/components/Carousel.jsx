import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Carousel = ({ title, popular }) => {
	const { setPlay } = useContext(DataContext);

	return (
		<div className=" w-full">
			<h1 className=" text-mainWhite font-bold text-2xl lg:text-3xl mb-3">
				{title}
			</h1>

			<section className="w-full overflow-x-auto no-scrollbar flex items-start gap-4 lg:gap-6 ">
				{popular.map((i, index) => (
					<button
						key={index}
						onClick={() => setPlay(i.name, popular)}
						className="flex-shrink-0 cursor-none lg:cursor-pointer text-left group h-[210px] flex flex-col justify-start">
						<img
							src={i.img}
							alt="img"
							className=" h-[153px] w-[153px] rounded-3xl group-active:opacity-60 lg:group-hover:opacity-60"
						/>
						<p className=" text-[12px] font-semibold my-1">{i.name}</p>
						<p className=" text-[12px] font-semibold">{i.artist}</p>
					</button>
				))}
			</section>
		</div>
	);
};

export default Carousel;
