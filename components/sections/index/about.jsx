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
		<Section
			id='about'
			classProp={`${about.section} ${about.hasBg} ${about.stars}`}
			className={about.stars}>
			<Container spacing={["verticalLrg"]} className={about.stars}>
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
										Master&apos;s in Data Science
									</span>{" "}
									from{" "}
									<span style={{ fontWeight: "bolder" }}>
										Indiana University Bloomington
									</span>{" "}
									and a Bachelor&apos;s in Computer Science, I bring a solid
									academic background to the table. Currently at Zyon Digital Solutions, I'm working on reimagining how the organization approaches employee development and feedback. 
									I'm building and optimizing front-end interfaces that help teams track and evaluate performance more effectively. 
									I also recently worked with Inception Robotics to develop <span style={{ fontWeight: "bolder" }}>CORTES</span> – a platform supporting <span style={{ fontWeight: "bolder" }}>U.S. Army field robotics experiments</span>, where I helped researchers manage and analyze complex robotics data more effectively.
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
									satisfied users.
									<br />
									In every project, I combine technical expertise with a passion
									for problem-solving, driving innovation and efficiency. I am
									proficient in{" "}
									<span style={{ fontWeight: "bolder" }}>
										JavaScript, Python, C, C++, Java, and SQL.
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
