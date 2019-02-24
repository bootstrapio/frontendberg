export const ContentH5Frontend = ( props ) => {
	if ( ! props.attributes.contentH5 ) {
		return null;
	}

	return (
			<h5>{ props.attributes.contentH5 }</h5>
	);
};
