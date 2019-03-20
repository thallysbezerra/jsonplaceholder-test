import React, { Component, Fragment } from "react";
import "./Content.scss";
import data from "./Content.json";

import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";
import closeIcon from "./img/close-icon.svg";
import LabelWithContent from "../../components/LabelWithContent/LabelWithContent";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";

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
		document.body.style.overflow = "visible";
	};

	showPosts = item => {
		this.setState({
			showPosts: true,
			userId: item.id,
			userName: item.name
		});
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						postsIsLoaded: true,
						posts: result
					});
				},
				error => {
					this.setState({
						postsIsLoaded: true,
						error
					});
				}
			);

		document.body.style.overflow = "hidden";
	};

	render() {
		const {
			error,
			isLoaded,
			postsIsLoaded,
			showPosts,
			users,
			posts,
			userId,
			userName
		} = this.state;
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
							<Title title={primaryPage.title} />
							<ul className="content__list grid-container">
								{users.map((item, index) => (
									<li
										className="content__list__item"
										key={index}
									>
										<div className="content--wrapper">
											<LabelWithContent
												label={primaryPage.name}
												content={item.name}
											/>
											<LabelWithContent
												label={primaryPage.email}
												content={item.email}
											/>
											<LabelWithContent
												label={primaryPage.phone}
												content={item.phone}
											/>
											<LabelWithContent
												label={primaryPage.website}
												content={item.website}
											/>
										</div>

										<ButtonArrow
											action={() => {
												this.showPosts(item);
											}}
											text="See posts"
										/>
									</li>
								))}
							</ul>
						</div>
					</section>

					{error ? (
						<div>Error: {error.message}</div>
					) : !postsIsLoaded && showPosts === true ? (
						<section className={showPosts ? "posts show" : "posts"}>
							<Loading />
						</section>
					) : (
						<section className={showPosts ? "posts show" : "posts"}>
							<img
								alt="Close"
								className="posts__close"
								onClick={() => {
									this.closePosts();
								}}
								src={closeIcon}
							/>
							<div className="container">
								<Title title={secondaryPage.title} />
								<LabelWithContent
									label={secondaryPage.user}
									content={userName}
								/>
								<ul className="posts__list">
									{posts !== undefined &&
										posts
											.filter(
												post => post.userId === userId
											)
											.map((item, index) => (
												<li
													className="posts__list__item"
													key={index}
												>
													<p className="posts__list__item__title">
														{item.title}
													</p>
													<p className="posts__list__item__message">
														{item.body}
													</p>
												</li>
											))}
								</ul>
							</div>
						</section>
					)}
				</Fragment>
			);
		}
	}
}
