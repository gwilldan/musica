import React from "react";
import { LuSearch } from "react-icons/lu";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { logo } from "../assets";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Nav from "./Nav";

const Header = () => {
	const { setToggle } = useContext(DataContext);

	return (
		<header className=" flex items-center py-6 lg:py-8 gap-8">
			<Nav />
			<HiOutlineMenuAlt4
				className=" text-2xl md:hidden"
				type="button"
				onClick={() => setToggle(true)}
			/>
			<img
				src={logo}
				alt="logo"
				height="24px"
			/>
			<div className=" flex-grow-[1] flex items-center justify-end lg:justify-normal gap-5">
				<LuSearch className="text-3xl text-dimWhite " />
				<input
					type="search"
					className="bg-mainDark text-dimWhite focus:outline-none hidden lg:block w-full placeholder:text-dimWhite font-semibold text-lg"
					placeholder=" Search song or Artist"
				/>
			</div>
		</header>
	);
};

export default Header;
