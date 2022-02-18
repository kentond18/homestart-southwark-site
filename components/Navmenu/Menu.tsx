import Link from "next/link";
import { useState } from "react";
import { Menu } from "../../types";
import NavSubmenu from "./NavSubmenu";

type Props = {
	menu: Menu;
};

const Menu = ({ menu }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	if (menu.path != undefined && !menu.items) {
		return (
			<li>
				<Link href={menu.path}>
					<a className="menu-title">{menu.name}</a>
				</Link>
			</li>
		);
	} else if (menu.items && !menu.path) {
		return (
			<li className="relative">
				<button
					className="my-1 flex w-full items-center justify-between"
					onClick={() => setIsOpen(!isOpen)}
				>
					<a className="menu-title">{menu.name} </a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<NavSubmenu links={menu.items} isOpen={isOpen} />
			</li>
		);
	} else if (menu.items && menu.path != undefined) {
		return (
			<li className="relative space-y-2">
				<div className="my-1 flex w-full items-center justify-between">
					<Link href={menu.path}>
						<a className="menu-title">{menu.name}</a>
					</Link>
					<button
						className="flex items-center justify-end text-orange-300"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<NavSubmenu links={menu.items} isOpen={isOpen} />
			</li>
		);
	} else {
		return (
			<li>
				<a className="menu-title">{menu.name}</a>
			</li>
		);
	}
};

export default Menu;
