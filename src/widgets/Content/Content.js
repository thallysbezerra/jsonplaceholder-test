import React, { Component } from "react";
import "./Content.scss";
// import data from "./Content.json";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";

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
						api: result,
						users: result
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
		const { error, isLoaded, api, users } = this.state;
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
						<h2 className="content__title">Users</h2>
						<ul className="content__list grid-container">
							{users.map((item, index) => (
								<li className="content__list__item" key={index}>
									<div className="content--wrapper">
										<label className="content__list__item__label">
											Name
										</label>
										<p className="content__list__item__value">
											{item.name}
										</p>

										<label className="content__list__item__label">
											Email
										</label>
										<p className="content__list__item__value">
											{item.email}
										</p>

										<label className="content__list__item__label">
											Phone
										</label>
										<p className="content__list__item__value">
											{item.phone}
										</p>

										<label className="content__list__item__label">
											Website
										</label>
										<p className="content__list__item__value">
											{item.website}
										</p>
									</div>

									<ButtonArrow text="See posts" />
								</li>
							))}
						</ul>
					</div>
				</section>
			);
		}
	}
}
