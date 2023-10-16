import { useContext } from "react";
import DataContext from "../context/DataContext";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { links } from "./constants/Links";

const Nav = () => {
	const { toggle, setToggle, linkID, click } = useContext(DataContext);

	return (
		<motion.nav
			className={` ${
				toggle ? "absolute" : "hidden"
			} bg-mainDark p-6 h-full w-full top-0 left-0 md:hidden z-10`}>
			<div className="flex items-center justify-end">
				<IoClose
					className=" text-3xl"
					type="button"
					onClick={() => setToggle(false)}
				/>
			</div>
			<ul className=" mx-4 mt-20 flex flex-col gap-12 text-dimWhite text-md font-semibold ">
				{links.map((i) => (
					<li
						key={i.id}
						type="button"
						onClick={() => click(i.id, i.url)}
						className=" w-max flex items-center gap-7">
						<div className={` ${linkID == i.id && "text-mainYellow"} text-2xl`}>
							{i.icon}
						</div>
						<p className={` ${linkID == i.id && "text-white"}`}>{i.name}</p>
					</li>
				))}
			</ul>
		</motion.nav>
	);
};

export default Nav;
