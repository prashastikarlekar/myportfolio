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
import TechnicalBadgesBlock from "../../blocks/technical.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import technical from "../../../styles/sections/index/technical.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb technical you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section id='skills' classProp={`${technical.section} borderBottom`}>
			<Container spacing={["verticalXXXLrg"]}>
				<SectionTitle
					title='Technical Skillset'
					preTitle='Hardskills'
					subTitle='As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages.'
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<TechnicalBadgesBlock
							title='Programming Languages'
							copy=''
							list={programming_languages}
							block='tech'
							fullContainer='fullContainer'
							icon='uncharted'
							containerClass={technical.container}
							headerIcon={technical.icon}
						/>
						<TechnicalBadgesBlock
							title='Web Technologies'
							copy=''
							list={web}
							block='tech'
							fullContainer='fullContainer'
							icon='slack'
							containerClass={technical.container}
							headerIcon={technical.icon}
						/>
					</div>
					<div className={technical.copy}>
						<TechnicalBadgesBlock
							title='Databases'
							copy=''
							list={db}
							block='tech'
							fullContainer='fullContainer'
							icon='whmcs'
							containerClass={technical.container}
							headerIcon={technical.icon}
						/>
						<TechnicalBadgesBlock
							title='Cloud and Other Tools'
							copy=''
							list={cloud}
							block='tech'
							fullContainer='fullContainer'
							icon='codepen'
							containerClass={technical.container}
							headerIcon={technical.icon}
						/>
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	);
}

const programming_languages = [
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "python", name: "Python", type: "devicon" },
	// { key: "react", name: "React", type: "devicon" },
	// { key: "nextjs", name: "NextJS", type: "devicon" },
	{ key: "typescript", name: "Typescript", type: "devicon" },
	{ key: "c", name: "C", type: "devicon" },
	{ key: "cplusplus", name: "C++", type: "devicon" },
	{ key: "java", name: "Java", type: "devicon" },
	{ key: "csharp", name: "C#", type: "devicon" },
];

const web = [
	{ key: "react", name: "React.js", type: "devicon" },
	{ key: "nextjs", name: "Next.js", type: "devicon" },
	{ key: "redux", name: "Redux", type: "devicon" },
	{ key: "nodejs", name: "NodeJS", type: "devicon" },
	{ key: "globe", name: "RESTful APIs", type: "fas" },
	{ key: "html5", name: "HTML", type: "devicon" },
	{ key: "css3", name: "CSS", type: "devicon" },
	{ key: "bootstrap", name: "Bootstrap", type: "devicon" },
	{ key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
	{ key: "materialui", name: "MaterialUI", type: "devicon" },
	{ key: "php", name: "PHP", type: "devicon" },
	{ key: "windows", name: ".NET", type: "fab" },
	{ key: "graphql", name: "GraphQL", type: "devicon" },
	{ key: "jest", name: "Jest", type: "devicon" },
	{ key: "product-hunt", name: "Postman", type: "fab" },
	{ key: "windows", name: "MVC Architecture", type: "fab" },
];

const db = [
	{ key: "mysql", name: "MySQL", type: "devicon" },
	{ key: "postgresql", name: "Postgres", type: "devicon" },
	{ key: "oracle", name: "Oracle Database", type: "devicon" },
	{ key: "mongodb", name: "MongoDB", type: "devicon" },
];

const cloud = [
	{ key: "visualstudio", name: "Visual Studio Code", type: "devicon" },
	{ key: "git", name: "Git", type: "devicon" },
	{ key: "aws", name: "AWS", type: "fab" },
	{ key: "google", name: "GCP", type: "fab" },
	{ key: "microsoft", name: "Microsoft Azure", type: "fab" },
	{ key: "docker", name: "Docker", type: "devicon" },
	{ key: "usb", name: "Kafka", type: "fab" },
];

const software = [
	{ key: "photoshop", name: "Photoshop", type: "devicon" },
	{ key: "illustrator", name: "Illustrator", type: "devicon" },
	{ key: "figma", name: "Figma", type: "devicon" },
	{ key: "vscode", name: "VSCode", type: "devicon" },
	{ key: "mailbox", name: "Postman", type: "fas" },
	{ key: "computer-mouse", name: "Click Up", type: "fas" },
	{ key: "list-music", name: "Ableton", type: "fas" },
	{ key: "aftereffects", name: "After Effects", type: "devicon" },
	{ key: "premierepro", name: "Premiere Pro", type: "devicon" },
];

const tech = [
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "nodejs", name: "NodeJS", type: "devicon" },
	{ key: "react", name: "React", type: "devicon" },
	{ key: "nextjs", name: "NextJS", type: "devicon" },
	{ key: "jquery", name: "jQuery", type: "devicon" },
	{ key: "php", name: "PHP", type: "devicon" },
	{ key: "wordpress", name: "WordPress", type: "devicon" },
	{ key: "woocommerce", name: "WooCommerce", type: "devicon" },
	{ key: "google", name: "GA4/GTM", type: "devicon" },
	{ key: "html5", name: "HTML5", type: "devicon" },
	{ key: "css3", name: "CSS3", type: "devicon" },
	{ key: "sass", name: "SASS", type: "devicon" },
	{ key: "git", name: "Git", type: "devicon" },
	{ key: "mysql", name: "MySQL", type: "devicon" },
	{ key: "mongodb", name: "MongoDB", type: "devicon" },
];
