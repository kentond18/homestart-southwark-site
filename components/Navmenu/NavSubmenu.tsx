import Link from "next/link";
import { MenuItem } from "../../types";

type Props = {
	links: MenuItem[];
	isOpen: boolean;
};

const NavSubmenu = ({ links, isOpen }: Props) => {
	return (
		<ul
			className={`${
				isOpen ? "left-0 h-full" : "-left-full h-0"
			} relative z-20 mx-2 transform space-y-2 overflow-auto px-3 transition-all duration-300 ease-in-out`}
		>
			{links.map((e, i) => {
				return (
					<li key={i}>
						<Link href={e.path}>
							<a className="menu-sublink">{e.name}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavSubmenu;
