import React, { useContext } from "react";
import {
	TbPlayerSkipForwardFilled,
	TbPlayerSkipBackFilled,
	TbArrowsShuffle,
} from "react-icons/tb";
import { PiRepeatOnce } from "react-icons/pi";
import { BiSolidVolumeFull } from "react-icons/bi";
import { HiPlay } from "react-icons/hi2";
import DataContext from "../context/DataContext";
import "./Footer.css";

const Footer = () => {
	const { repeatToggle, shuffleToggle, repeat, shuffle, playing } =
		useContext(DataContext);

	return (
		<footer className=" h-[85px] lg:h-[115px] fixed bottom-0 w-full  backdrop-blur-lg py-4 px-6 bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1]">
			<div className=" h-full lg:max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-[20%_60%_20%] items-center justify-between">
				{/* SONG INFORMATION */}
				<section className=" flex ">
					<img
						src={playing.img}
						alt="play"
						className="h-[53px] w-[53px] md:h-12 md:w-12 rounded-2xl mr-3"
					/>
					<div className=" flex flex-col justify-center gap-1">
						<h2 className=" font-semibold text-sm">{playing.name}</h2>
						<p className=" text-[10px] text-dimWhite font-semibold">
							{playing.artist}
						</p>
					</div>
				</section>

				{/* SONG CONTROLS */}
				<section className=" w-full lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6 lg:h-full">
					<div className=" flex items-center justify-end gap-7 lg:gap-11">
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
							} md:cursor-pointer hidden md:block md:hover:scale-125 md:hover:ease-in-out duration-200 `}
							type="button"
							onClick={repeat}
						/>
					</div>
					{/* <div
						typeof="button"
						className=" hidden lg:block lg:cursor-pointer h-1 w-[80%] rounded-l-full rounded-r-full bg-dimWhite ">
						<div
							typeof="button"
							className=" lg:cursor-pointer h-1 w-[50%] rounded-l-full rounded-r-full bg-mainYellow flex justify-end items-center ">
							<div className=" h-4 w-4 border rounded-full grid place-content-center mr-[-8px] ">
								<div className=" bg-mainYellow rounded-full h-2 w-2"></div>
							</div>
						</div>
					</div> */}

					<input
						id="song"
						type="range"
						className="hidden lg:block lg:cursor-pointer "
						min="0"
						max="100"
						step="1"
						onInput={(event) => console.log("the song", event.target.value)}
					/>
				</section>

				{/* VOLUME */}
				<section className=" hidden lg:flex items-center justify-start gap-3">
					<BiSolidVolumeFull className=" text-white text-2xl" />
					<input
						id="volume"
						type="range"
						min="0"
						max="100"
						step="1"
						onInput={(event) => console.log(event.target.value)}
					/>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
