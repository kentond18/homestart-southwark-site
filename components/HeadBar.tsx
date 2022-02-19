type Props = {
	phone: string;
	email: string;
};

const HeadBar = (props: Props) => {
	return (
		<div className="w-full bg-purple-700 text-white">
			<div className="flex h-10 items-center justify-evenly">
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
			</div>
			<div className="hidden md:visible"></div>
		</div>
	);
};

export default HeadBar;
