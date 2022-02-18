type Props = {
	phone: string;
	email: string;
};

const HeadBar = (props: Props) => {
	return (
		<div className="w-full bg-purple-700 text-white">
			<div className="flex h-10 w-full items-center justify-evenly">
				<div>Phone: {props.phone}</div>
				<div>Email: {props.email}</div>
			</div>
			<div className="hidden md:visible"></div>
		</div>
	);
};

export default HeadBar;
