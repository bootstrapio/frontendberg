const { Fragment } = wp.element;

import { ContentH2Frontend } from '../../elements/content-h2/frontend';
import { ContentH3Frontend } from '../../elements/content-h3/frontend';
import { ContentParagraphFrontend } from '../../elements/content-paragraph/frontend';
import { ContentLinkFrontend } from '../../elements/content-link/frontend';

export const ContentFrontend = ( props ) => {
	if ( ! props.attributes.displayContent ) {
		return null;
	}

	return (
		<Fragment>
		<div class='col'>
			{ props.attributes.contentDisplayH2 && ( <ContentH2Frontend { ...props } /> ) }
			{ props.attributes.contentDisplayH3 && ( <ContentH3Frontend { ...props } /> ) }
		</div>
		<div class='col'>
			{ props.attributes.contentDisplayParagraph && ( <ContentParagraphFrontend { ...props } /> ) }
			{ props.attributes.contentDisplayLink && ( <ContentLinkFrontend { ...props } /> ) }
		</div>
		</Fragment>
	);
};
