export const SuperscriptFrontend = ( props ) => {
	if ( ! props.attributes.displaySuperscript ) {
		return null;
	}

	return (
		<div class='col superscript'>
			{ props.attributes.superscriptDisplayIcon && (
				<figure className = {'block-media media-icon ' + ( ! props.attributes.superscriptImageURL ? ' placeholder' : '')}>
					<img alt={ props.attributes.superscriptImageAlt } class="img-fluid" src={ props.attributes.superscriptImageURL } />
				</figure>
			) }
			{ props.attributes.superscriptDisplayTitle && (
				<h5>{ props.attributes.superscriptTitle }</h5>
			) }
		</div>
	);
};
