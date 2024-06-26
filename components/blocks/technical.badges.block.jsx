/** @format */

import Icon from "../utils/icon.util.jsx";
import Badges from "../utils/badge.list.util";
import TechnicalBadges from "../utils/technicalBadge.list.util";
import badges from "../../styles/blocks/badges.module.scss";

export default function TechnicalBadgesBlock({
	title,
	copy,
	list,
	fullContainer,
	block,
	icon,
	invertedColor,
	headerIcon,
	containerClass,
}) {
	return (
		<div className={`${badges.badgeBlockContainer} ${containerClass}`}>
			<div className={`${badges.headingIcon}`}>
				<span className={headerIcon}>
					<Icon icon={["fab", icon]} />
				</span>
				<h3>{title}</h3>
			</div>
			<Copy copy={copy} />
			<TechnicalBadges
				list={list}
				block={block}
				invertedColor={invertedColor}
				fullContainer={fullContainer}
			/>
		</div>
	);
}

function Copy({ copy }) {
	if (copy) return <p>{copy}</p>;
}
