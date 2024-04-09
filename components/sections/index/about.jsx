/** @format */

// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */

export default function About() {
	return (
		<Section id='about' classProp={`${about.section} ${about.hasBg}`}>
			<Container spacing={["verticalXXXLrg"]}>
				<SectionTitle
					title='About Me'
					preTitle=''
					subTitle="I'm a tech enthusiast who loves tackling challenges head-on. Let's collaborate and turn your ideas into reality!"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src='/img/aboutMe.jpg' alt='My photo' />
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy}>
						<CopyBlock
							title=''
							containerClass={about.container}
							copy={
								<>
									With a{" "}
									<span style={{ fontWeight: "bolder" }}>
										Master&apos;s in Data Science from Indiana University
										Bloomington
									</span>{" "}
									and a Bachelor&apos;s in Computer Science, I bring a solid
									academic background to the table. Currently, I work as a
									Research Assistant at IU, where I lead the development of{" "}
									<a
										style={{ textDecoration: "underline" }}
										href='https://artsanalytics.org/'
										target='_blank'
										rel='noopener noreferrer'>
										AEI Lab
									</a>{" "}
									website using{" "}
									<span style={{ fontWeight: "bolder" }}>React.js</span>,
									boosting user engagement by 8%.
									<br />
									My professional journey spans various domains, from optimizing
									applications for insurance agents at{" "}
									<span style={{ fontWeight: "bolder" }}>
										Bloom Insurance Agency
									</span>
									, where I leveraged{" "}
									<span style={{ fontWeight: "bolder" }}>
										{" "}
										ASP.NET, MVC, and JavaScript{" "}
									</span>
									, to collaborating with CTOs at{" "}
									<span style={{ fontWeight: "bolder" }}>
										Tata Consultancy Services
									</span>{" "}
									to develop user-friendly fitness application.
									<br />
									Using technologies like{" "}
									<span style={{ fontWeight: "bolder" }}>
										React.js, React Native, Redux, Jenkins, RESTful web
										services, GraphQL, and Node.js
									</span>
									, I&apos;ve created applications that cater to over 10,000
									satisfied users. I also spearheaded the adoption of paperless
									practices in healthcare, resulting in an impressive 80%
									reduction in manual work.
									<br />
									In every project, I combine technical expertise with a passion
									for problem-solving, driving innovation and efficiency. I am
									proficient in{" "}
									<span style={{ fontWeight: "bolder" }}>
										JavaScript, Python, C, C++, and SQL.
									</span>
									<br />
									Apart from coding, I find joy in expressing myself through
									dance, having earned a five-year degree in classical Indian
									dance Kathak; I also enjoy practicing yoga, delving into
									diverse cultures through their histories, and connecting with
									people to foster new opportunities.
									<br />
									Currently seeking a challenging assignment which will provide
									avenues for professional learning, hone my technical skills
									and enrich my experience as well as knowledge in the process.
								</>
							}
						/>
					</div>
				</section>
			</Container>
		</Section>
	);
}
