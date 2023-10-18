import React, { useContext } from "react";
import img2 from "../assets/imgTwo.jpeg";
import {
	TbPlayerSkipForwardFilled,
	TbPlayerSkipBackFilled,
	TbArrowsShuffle,
} from "react-icons/tb";
import { PiRepeatOnce } from "react-icons/pi";
import { HiPlay } from "react-icons/hi2";
import DataContext from "../context/DataContext";

const Footer = () => {
	const { repeatToggle, shuffleToggle, repeat, shuffle } =
		useContext(DataContext);

	return (
		<footer className=" h-[85px] lg:h-[115px] fixed bottom-0 w-full  backdrop-blur-lg py-4 px-6 flex items-center bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1] justify-between">
			<section className=" flex ">
				<img
					src={img2}
					alt="play"
					className="h-[53px] w-[53px] md:h-12 md:w-12 rounded-2xl mr-3"
				/>
				<div className=" flex flex-col justify-center gap-1">
					<h2 className=" font-semibold text-sm">Bandana</h2>
					<p className=" text-[10px] text-dimWhite font-semibold">
						Fireboy DML & Asake
					</p>
				</div>
			</section>
			<section className=" flex items-center gap-5">
				<TbArrowsShuffle
					className={`${
						shuffleToggle && "text-mainYellow"
					} md:cursor-pointer hidden md:block md:hover:scale-125 md:hover:ease-in-out duration-200`}
					type="button"
					onClick={shuffle}
				/>
				<TbPlayerSkipBackFilled
					className=" md:cursor-pointer md:hover:scale-125 md:hover:ease-in-out duration-200"
					type="buton"
				/>
				<div
					type="button"
					className="h-[25px] w-[25px] bg-mainYellow text-white rounded-full grid place-content-center text-center md:hover:scale-110 md:cursor-pointer md:hover:ease-in-out duration-200">
					<HiPlay className=" ml-[2px]" />
				</div>
				<TbPlayerSkipForwardFilled
					className={`md:cursor-pointer md:hover:scale-125 md:hover:ease-in-out duration-200 `}
					type="button"
				/>
				<PiRepeatOnce
					className={`${
						repeatToggle && "text-mainYellow"
					} md:cursor-pointer hidden md:block md:hover:scale-125 md:hover:ease-in-out duration-200`}
					type="button"
					onClick={repeat}
				/>
			</section>
		</footer>
	);
};

export default Footer;
