const { Fragment } = wp.element;

export const ContentLinkFrontend = ( props ) => {
	if ( ! props.attributes.contentDisplayLink ) {
		return null;
	}

	return (
    <Fragment>
			{ props.attributes.contentDisplayLink && (
				<p className = { 'link' + ( props.attributes.contentLinkType == 'default' ? '' : ' ' + props.attributes.contentLinkType) }>{ props.attributes.contentLink }</p>
			) }
		</Fragment>
	);
};
