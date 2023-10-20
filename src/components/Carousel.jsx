import React from "react";

const Carousel = ({ title, popular }) => {
	return (
		<div className=" w-full">
			<h1 className=" text-mainWhite font-bold text-2xl lg:text-3xl mb-2">
				{title}
			</h1>

			<section className="w-full overflow-x-auto no-scrollbar flex items-start gap-6 ">
				{popular.map((i, index) => (
					<div
						key={index}
						className="flex-shrink-0">
						<img
							src={i.img}
							alt="img"
							className=" h-[153px] w-[153px] rounded-3xl"
						/>
						<p className="text-[12px] font-semibold my-1">{i.name}</p>
						<p className="text-[12px] font-semibold">{i.artist}</p>
					</div>
				))}
			</section>
		</div>
	);
};

export default Carousel;
