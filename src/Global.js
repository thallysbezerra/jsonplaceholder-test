import React, { Component } from "react";
import Header from "./components/Header/Header";
import Content from "./widgets/Content/Content";
import Footer from "./components/Footer/Footer";

export default class Glbal extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}
