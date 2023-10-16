import { GoHomeFill } from "react-icons/go";
import { MdFolderSpecial } from "react-icons/md";
import { RiRadio2Fill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

export const links = [
	{
		id: 1,
		name: "Home",
		url: "/",
		icon: <GoHomeFill />,
	},
	{
		id: 2,
		name: "My collection",
		url: "/collection",
		icon: <MdFolderSpecial />,
	},
	{
		id: 3,
		name: "Radio",
		url: "*",
		icon: <RiRadio2Fill />,
	},
	{
		id: 4,
		name: "Music Video",
		url: "*",
		icon: <PiVideoFill />,
	},
	{
		id: 5,
		name: "Profile",
		url: "*",
		icon: <BsFillPersonFill />,
	},
	{
		id: 6,
		name: "Logout",
		url: "*",
		icon: <IoLogOut />,
	},
];
