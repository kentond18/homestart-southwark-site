import Image from "next/image";
import { InfoCard } from "../types";

type Props = {
	info: InfoCard;
};

const InfoCard = ({ info }: Props) => {
	const { title, description, image, alt } = info;

	return (
		<div className="flex">
			<div className="relative h-40 w-40">
				<Image
					src={image}
					alt={alt}
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
