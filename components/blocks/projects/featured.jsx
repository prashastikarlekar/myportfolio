/** @format */

import Image from "next/image";

import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";
import button from "../../../styles/blocks/button.module.scss";

export default function FeaturedProject({ content }, index) {
	const {
		project,
		url,
		liveUrl,
		repo,
		descriptionTitle,
		features,
		stack,
		imageOptions,
		images,
	} = content;

	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.25,
		triggerOnce: false,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<m.section
			key={index}
			className={css.project}
			ref={ref}
			variants={container}
			initial={["rest", "hidden"]}
			whileHover='hover'
			animate={controls}>
			<div className={css.details}>
				<div className={css.projectHeader}>
					<h3 className='highlight'>{project}</h3>
					<div className={`${css.header} leavesite`}>
						{/* <span className={css.privateOr}>
							<i className='devicon-github-plain'></i>
							{repo}
						</span> */}
						<button
							className={`button ${button.primary} leaveSite `}
							onClick={() => window.open(url, "_blank")}
							style={{
								fontSize: "0.9rem",
								padding: ".75rem 1rem",
								whiteSpace: "nowrap",
							}}>
							View on GitHub
						</button>
						{liveUrl !== "" && (
							<button
								className={`button ${button.primary} leaveSite `}
								onClick={() => window.open(liveUrl, "_blank")}
								style={{
									fontSize: "0.9rem",
									padding: ".75rem ",
									whiteSpace: "nowrap",
								}}>
								Live Project
							</button>
						)}
					</div>
					<div className={css.description}>
						<p>{descriptionTitle} </p>
					</div>
					<div className={css.features}>
						<p>{features} </p>
					</div>
					<div className={css.stackContainer}>
						<Badges
							list={stack}
							block='stack'
							fullContainer={false}
							color={false}
						/>
					</div>
				</div>
			</div>

			<div className={css.imageContainer}>
				<span className={`${css.imageAnimationContainer}`}>
					{images.map(({ key, url, hover, h, w }, index) => {
						// hover = hover === "left" ? hoverLeft : hoverRight;

						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div>
									<Image
										className=''
										src={url}
										alt='x'
										height={h}
										width={w}
										style={{ height: "20px" }}
										unoptimized
									/>
								</m.div>
							</m.div>
						);
					})}
				</span>
			</div>
		</m.section>
	);
}

const container = {
	hidden: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625,
		},
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		},
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		},
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		},
	},
};

const item = {
	hidden: {
		y: 75,
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: 0.35,
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: 0.5,
		},
	},
};
