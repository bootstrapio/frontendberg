export const MediaIconFrontend = ( props ) => {
	return (
		<figure class='media-icon'>
			<img alt={ props.attributes.mediaIconAlt } class='img-fluid' src={ props.attributes.mediaIconURL } />
		</figure>
	);
};
