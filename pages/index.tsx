import Header from "../components/Header";
import Navbar from "../components/Navmenu/Navbar";
import Footer from "../components/Footer";
import { NextPage } from "next";
import HeadBar from "../components/HeadBar";
import InfoCard from "../components/InfoCard";
import { aboutInfo } from "../data/aboutinfo";

const Home: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="min-h-vh flex-col">
			<Header
				title="Homestart Southwark"
				description="A foundation based in Southwark, London helping families with troubled kids under the age of five."
			/>

			<HeadBar
				phone={"020 7737 7720"}
				email={"info@homestartsouthwark.co.uk"}
			/>
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

			<div
				className={`${
					isOpen ? "opacity-30" : "opacity-100"
				} transition-all duration-300 ease-in-out`}
			>
				<div
					className="container flex h-1/2 flex-col items-center justify-center space-y-3 p-4 bg-blend-normal backdrop-brightness-50"
					style={{
						background:
							"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/child-on-playground.jpg')",
						backgroundSize: "cover",
					}}
				>
					<div>
						<p className="pb-0">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Consequatur, veritatis, odit voluptatibus aut
							veniam nostrum dolorem exercitationem atque amet
							quisquam.
						</p>
						<p className="float-right px-3 text-left">- Author</p>
					</div>
					<button className="btn">Learn More</button>
				</div>

				<div>
					{aboutInfo.map((e, i) => {
						return <InfoCard key={i} info={e} />;
					})}
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Home;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
	// your fetch function here

	return {
		props: {},
	};
};
