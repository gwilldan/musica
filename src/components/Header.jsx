import React from "react";
import { LuSearch } from "react-icons/lu";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { logo } from "../assets";

const Header = () => {
	return (
		<nav className=" flex items-center py-6 lg:py-8 gap-4">
			<HiOutlineMenuAlt4 className=" text-2xl" />
			<img
				src={logo}
				alt="logo"
				height="24px"
			/>
			<div className=" flex-grow-[1] flex items-center justify-end">
				<LuSearch className="text-3xl text-dimWhite " />
			</div>
		</nav>
	);
};

export default Header;
