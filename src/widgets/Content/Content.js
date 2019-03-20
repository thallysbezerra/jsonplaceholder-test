import React, { Component, Fragment } from "react";
import "./Content.scss";
import data from "./Content.json";

import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";
import closeIcon from "./img/close-icon.svg";
import Loading from "../../components/Loading/Loading";

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			showPosts: false
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

	closePosts = () => {
		this.setState({
			showPosts: false
		});
	};

	showPosts = () => {
		this.setState({
			showPosts: true
		});
	};

	render() {
		const { error, isLoaded, showPosts, users } = this.state;
		const primaryPage = data.primaryPage;
		const secondaryPage = data.secondaryPage;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<section className="content">
					<Loading />
				</section>
			);
		} else {
			return (
				<Fragment>
					<section className="content">
						<div className="container">
							<h2 className="content__title">
								{primaryPage.title}
							</h2>
							<ul className="content__list grid-container">
								{users.map((item, index) => (
									<li
										className="content__list__item"
										key={index}
									>
										<div className="content--wrapper">
											<small className="content__list__item__label">
												{primaryPage.name}
											</small>
											<p className="content__list__item__value">
												{item.name}
											</p>

											<small className="content__list__item__label">
												{primaryPage.email}
											</small>
											<p className="content__list__item__value">
												{item.email}
											</p>

											<small className="content__list__item__label">
												{primaryPage.phone}
											</small>
											<p className="content__list__item__value">
												{item.phone}
											</p>

											<small className="content__list__item__label">
												{primaryPage.website}
											</small>
											<p className="content__list__item__value">
												{item.website}
											</p>
										</div>

										<ButtonArrow
											action={() => {
												this.showPosts();
											}}
											text="See posts"
										/>
									</li>
								))}
							</ul>
						</div>
					</section>
					<div className={showPosts ? "posts show" : "posts"}>
						<img
							alt="Close"
							className="posts__close"
							onClick={() => {
								this.closePosts();
							}}
							src={closeIcon}
						/>
						<div className="container">
							<h2 className="posts__title">
								{secondaryPage.title}
							</h2>
							<small className="posts__label">User</small>
							<p className="posts__user">Nome do usuário</p>
							<p className="posts__title">Título da mensagem</p>
							<p className="posts__message">
								Mensagem do usuário
							</p>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}
