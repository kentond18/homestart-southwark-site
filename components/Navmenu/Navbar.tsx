import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavData } from "../../data/nav";
import Menu from "./Menu";
import logo from "../../public/logo.png";

type Props = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const Navbar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	return (
		<nav className="static bg-white py-2 shadow-md">
			<div className="relative flex items-center justify-center">
				<button
					className="absolute left-0 z-10 ml-2"
					onClick={() => setIsOpen(!isOpen)}
				>
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
					<a className="">
						<Image
							src={logo}
							alt="logo"
							placeholder="blur"
							layout="intrinsic"
							objectFit="contain"
							height={80}
						/>
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
