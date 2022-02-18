import Head from "next/head";
import { FC } from "react";

type Props = {
	title: string;
	description?: string;
};

const Header: FC<Props> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta name="description" content={description} />
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />k
		</Head>
	);
};

export default Header;
