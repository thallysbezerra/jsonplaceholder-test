import React, { Fragment } from "react";
import "./LabelWithContent.scss";

const LabelWithContent = props => {
	return (
		<Fragment>
			<small className="label-with-content__label">{props.label}</small>
			<p className="label-with-content__content">{props.content}</p>
		</Fragment>
	);
};

export default LabelWithContent;
