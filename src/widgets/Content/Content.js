import React, { Component } from "react";
import "./Content.scss";
// import data from "./Content.json";

import Loading from "../../components/Loading/Loading";

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						api: result
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { error, isLoaded, api } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<section className="content">
					<Loading />
				</section>
			);
		} else {
			console.log(api);
			return (
				<section className="content">
					<div className="container">
						<p>Content</p>
					</div>
				</section>
			);
		}
	}
}
