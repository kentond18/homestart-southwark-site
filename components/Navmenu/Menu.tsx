import Link from "next/link";
import { useState } from "react";
import { Menu } from "../../types";
import NavSubmenu from "./NavSubmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
					<FontAwesomeIcon icon={faChevronDown} />
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
						<FontAwesomeIcon icon={faChevronDown} />
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
