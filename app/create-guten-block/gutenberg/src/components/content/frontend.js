const { Fragment } = wp.element;

export const ContentFrontend = ( props ) => {
	if ( ! props.attributes.contentDisplayParagraph && ! props.attributes.contentDisplayLink ) {
		return null;
	}

	return (
    <Fragment>
  		<div class='col'>
  			{ props.attributes.contentDisplayParagraph && (
  				<p>{ props.attributes.contentParagraph }</p>
  			) }
  			{ props.attributes.contentDisplayLink && (
  				<p className = { 'link' + ( props.attributes.contentLinkType == 'default' ? '' : ' ' + props.attributes.contentLinkType) }>{ props.attributes.contentLink }</p>
  			) }
  		</div>
		</Fragment>
	);
};
