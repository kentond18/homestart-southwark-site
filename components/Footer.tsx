import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import logo from "../public/logo.png";
import { contactInfo } from "../data/contactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faFacebook,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NavData } from "../data/nav";

type Props = {};

const Footer: FC<Props> = () => {
	return (
		<footer className="container  flex flex-col space-y-3 bg-purple-800 p-3 pt-10">
			<div className="flex items-center justify-center bg-white py-2">
				<Image
					src={logo}
					alt="logo"
					placeholder="blur"
					layout="intrinsic"
					objectFit="contain"
					height={80}
					width={80}
				/>
			</div>
			<div className="flex flex-col items-start p-3">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reprehenderit facere excepturi sunt vel doloribus nam
					voluptas, error nisi cumque veritatis.
				</p>
				<p className="self-end">
					<cite>- Author</cite>
				</p>
				<Link passHref href={"/donate"}>
					<button className="btn self-center">Donate Now</button>
				</Link>
			</div>
			<div className="flex flex-col space-y-3 p-3">
				<h3 className="text-white">Contact Us</h3>
				<div className="flex items-center justify-evenly">
					<a href={contactInfo.twitter}>
						<FontAwesomeIcon
							className="h-7 text-orange-300"
							icon={faTwitter}
						/>
					</a>
					<a href={contactInfo.instagram}>
						<FontAwesomeIcon
							className="h-7 text-orange-300"
							icon={faInstagram}
						/>
					</a>
					<a href={contactInfo.facebook}>
						<FontAwesomeIcon
							className="h-7 text-orange-300"
							icon={faFacebook}
						/>
					</a>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon
						className="text-orange-300"
						icon={faLocationPin}
					/>
					<p>{contactInfo.address}</p>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon
						className="text-orange-300"
						icon={faEnvelope}
					/>
					<p>{contactInfo.email}</p>
				</div>
			</div>
			<div className="flex flex-col p-3 ">
				<h3 className="text-white">Volunteer Information</h3>
				<div className="flex flex-col space-y-3 pt-2 text-gray-300">
					{NavData.find(
						(e) => e.name === "Volunteer Enquiries"
					)?.items?.map((e, i) => {
						return (
							<Link key={i} href={e.path}>
								<a className="underline underline-offset-2 hover:text-white">
									{e.name}
								</a>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex flex-col p-3">
				<h3 className="text-white">Donor Information</h3>
				<div className="flex flex-col space-y-3 pt-2 text-gray-300">
					{NavData.find((e) => e.name === "Donate")?.items?.map(
						(e, i) => {
							return (
								<Link key={i} href={e.path}>
									<a className="underline underline-offset-2 hover:text-white">
										{e.name}
									</a>
								</Link>
							);
						}
					)}
				</div>
			</div>
			<div className="flex justify-evenly text-gray-300 ">
				<h6 className="hover:text-white hover:underline">
					Terms of Use
				</h6>
				<h6 className="hover:text-white hover:underline">
					Privacy Policy
				</h6>
			</div>
			<div className="flex justify-center">
				<p>&#169; {new Date().getFullYear()} Homestart Southwark</p>
			</div>
		</footer>
	);
};

export default Footer;
