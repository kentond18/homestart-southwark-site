type Props = {
	phone: string;
	email: string;
};

const HeadBar = (props: Props) => {
	return (
		<div className="flex h-8 w-full items-center justify-evenly bg-purple-800">
			<p className="text-xs font-bold">
				Phone:{" "}
				<a className="underline" href={`tel:+44${props.phone}`}>
					{props.phone}
				</a>
			</p>
			<p className="text-xs font-bold">
				Email:{" "}
				<a className="underline" href={`mailto:${props.email}`}>
					{props.email}
				</a>
			</p>

			<div className="hidden md:visible"></div>
		</div>
	);
};

export default HeadBar;
