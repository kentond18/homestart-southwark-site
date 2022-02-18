import Link from "next/link";
import { useState } from "react";
import { NavData } from "../../data/nav";
import Menu from "./Menu";

type Props = {};

const Navbar: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="static bg-white shadow-md">
			<div className="flex items-center justify-center">
				<button className="m-2" onClick={() => setIsOpen(!isOpen)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<Link href="/">
					<a className="grow text-center">
						<h1>Homestart Southwark</h1>
					</a>
				</Link>
			</div>

			<ul
				className={`${
					isOpen ? "left-0 bg-white" : " -left-full bg-transparent"
				} absolute z-10 flex h-auto w-3/5 transform flex-col overflow-auto border px-3 pb-2 shadow transition-all duration-500 ease-in-out`}
			>
				{NavData.map((menu) => {
					return <Menu key={menu.name} menu={menu} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
