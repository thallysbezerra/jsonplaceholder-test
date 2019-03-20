import React, { Component, Fragment } from "react";
import "./ButtonArrow.scss";

const ButtonArrow = props => {
	return (
		<Fragment>
			<button
				className="button-arrow"
				disabled={props.disabled}
				onClick={props.action}
			>
				<div className="button-arrow__text">
					{props.text}
					<span class="button-arrow__arrow">
						<div class="button-arrow__arrow--central-bar" />
						<div class="button-arrow__arrow--bottom-bar" />
						<div class="button-arrow__arrow--top-bar" />
					</span>
				</div>
			</button>
		</Fragment>
	);
};

export default ButtonArrow;
