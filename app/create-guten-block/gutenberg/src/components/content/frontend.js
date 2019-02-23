const { Fragment } = wp.element;

import ContentLink, { ContentLinkFrontend } from '../content-link';

export const ContentFrontend = ( props ) => {
	if ( ! props.attributes.contentDisplayParagraph && ! props.attributes.contentDisplayLink ) {
		return null;
	}

	return (
    <Fragment>
  		<div class='col'>
  			{ props.attributes.contentDisplayParagraph && (
  				<p className='content'>{ props.attributes.contentParagraph }</p>
  			) }
				<ContentLinkFrontend { ...props } />
  		</div>
		</Fragment>
	);
};
