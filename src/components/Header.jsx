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
		<header className=" flex items-center py-6 lg:py-8 gap-4">
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
			<div className=" flex-grow-[1] flex items-center justify-end">
				<LuSearch className="text-3xl text-dimWhite " />
			</div>
		</header>
	);
};

export default Header;
