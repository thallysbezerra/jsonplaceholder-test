import React from "react";
import "./Header.scss";
import data from "./Header.json";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="header__logo">{data.logo}</h1>
			</div>
		</header>
	);
};

export default Header;
