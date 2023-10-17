import React from "react";
import { TopMix } from "./constants/TopMix";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const TopCharts = () => {
	const { setFavourite } = useContext(DataContext);

	return (
		<aside className=" mt-10 lg:mt-0 lg:flex-1">
			<h1 className=" text-mainWhite font-bold text-2xl lg:text-3xl">
				{" "}
				Top Mix
			</h1>
			<section className=" overflow-x-auto no-scrollbar my-3 ">
				<ul className=" flex gap-5 lg:flex-col lg:justify-between ">
					{TopMix.map((i, index) => (
						<li
							key={index}
							className=" w-[270px] h-[240px] bg-dimDark flex-shrink-0 lg:flex-shrink rounded-3xl p-4 lg:w-full lg:h-[96px] grid grid-cols-[70%, 30%] lg:grid-cols-3 grid-rows-[115px]">
							<img
								src={i.img}
								alt="mix"
								className=" h-[108px] w-[108px] rounded-xl"
							/>
							<section className=" flex flex-col">
								<h1 className=" font-bold">{i.name}</h1>
								<p className=" text-sm flex-1">{i.artist}</p>
								<p className=" font-bold text-sm -end ">{i.time}</p>
							</section>
							<section className=" col-start-2 row-start-1 flex justify-end">
								<div className=" rounded-full h-10 w-10 border border-dimWhite grid place-content-center">
									<AiFillHeart
										type="button"
										onClick={() => setFavourite(i.id)}
										className="text-2xl"
									/>
								</div>
							</section>
						</li>
					))}
				</ul>
			</section>
		</aside>
	);
};

export default TopCharts;
