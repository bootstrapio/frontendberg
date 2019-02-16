export const ContentH3Frontend = ( props ) => {
	if ( ! props.attributes.contentDisplayHeadline ) {
		return null;
	}

	return (
		<div class="col">
			<h3>{ props.attributes.contentH3 }</h3>
		</div>
	);
};
