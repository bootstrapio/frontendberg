export const SuperscriptFrontend = ( props ) => {
	if ( ! props.attributes.superscriptDisplay ) {
		return null;
	}

	return (
		<h4 className = 'superscript'>
			{ props.attributes.superscriptDisplayIcon && (
				<figure className = {'media-icon ' + ( ! props.attributes.superscriptIconURL ? ' placeholder' : '')}>
					<img alt={ props.attributes.superscriptIconAlt } class="img-fluid" src={ props.attributes.superscriptIconURL } />
				</figure>
			) }
			{ props.attributes.superscriptDisplayTitle && (
				<span>{ props.attributes.superscriptTitle }</span>
			) }
		</h4>
	);
};
