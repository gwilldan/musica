import React from "react";
import { links } from "./constants/Links";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const MainNav = () => {
	const { linkID, click } = useContext(DataContext);

	return (
		<ul className=" hidden h-fit w-[50px] lg:flex px-4 py-8 flex-col items-center lg:bg-dimDark text-dimWhite gap-10 rounded-t-full rounded-b-full cursor-pointer">
			{links.map((i) => (
				<li
					type="button"
					onClick={() => click(i.id, i.url)}
					key={i.id}
					className={` ${linkID == i.id && "text-mainYellow"} text-2xl `}>
					{i.icon}
				</li>
			))}
		</ul>
	);
};

export default MainNav;
