/** @format */

import { useState, useEffect } from "react";

import Container from "../structure/container";
import Icon from "../utils/icon.util";

import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";

export default function Footer() {
	return (
		<footer id='contact' className={css.container}>
			<Container spacing={["verticalXXLrg", "bottomLrg"]}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li>
							<h3>Phone</h3>
						</li>
						<li>
							<p>+1 765-346-7967</p>
						</li>
					</ul>
					<ul className={css.thanks}>
						<li>
							<h3>Email</h3>
						</li>
						<li>
							<p>prashastikarlekar@gmail.com</p>
							<p>prkarl@iu.edu</p>
						</li>
					</ul>

					<ul className={css.social}>
						<li>
							<h4>Social</h4>
						</li>
						<li className={css.socialList}>
							{content.social.map(({ url, icon }, index) => {
								return (
									<a key={index} href={url} rel='noreferrer' target='_blank'>
										<Icon icon={["fab", icon]} />
									</a>
								);
							})}
						</li>
					</ul>
				</section>
				<section className={css.github}>
					{/* <a
						href={settings.portfolio.repo_html}
						rel='noreferrer'
						target='_blank'> */}
					<h5>{settings.portfolio.forkthis}</h5>
					<h5>{settings.portfolio.subtitle}</h5>
				</section>
			</Container>
			<canvas id='gradient-canvas' className={""} data-transition-in></canvas>
		</footer>
	);
}
