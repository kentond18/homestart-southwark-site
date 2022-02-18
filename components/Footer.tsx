import Link from "next/link";
import { FC } from "react";

type Props = {};

const Footer: FC<Props> = () => {
	return (
		<footer className="bg-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					<div className="flex items-center">
						<Link href="/">
							<a className="text-2xl font-bold">
								Homestart Southwark
							</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
