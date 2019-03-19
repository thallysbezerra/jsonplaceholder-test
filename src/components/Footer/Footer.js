import React from "react";
import "./Footer.scss";
import data from "./Footer.json";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__text">{data.text}</p>
				<p className="footer__name">{data.name}</p>
			</div>
		</footer>
	);
};

export default Footer;
