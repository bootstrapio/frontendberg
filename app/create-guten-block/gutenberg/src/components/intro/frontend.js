const { Fragment } = wp.element;

import { ContentH2Frontend } from '../../elements/content-h2/frontend';
import { ContentLinkFrontend } from '../../elements/content-link/frontend';
import { ContentParagraphFrontend } from '../../elements/content-paragraph/frontend';

export const IntroFrontend = ( props ) => {
	if ( ! props.attributes.displayIntro ) {
		return null;
	}

	return (
		<Fragment>
		<div class='col'>
			{ props.attributes.introDisplayHeadline && (
				<ContentH2Frontend { ...props } />
			) }
		</div>
		<div class='col'>
			{ props.attributes.introDisplayParagraph && (
				<ContentParagraphFrontend { ...props } />
			) }
			{ props.attributes.introDisplayLink && (
				<ContentLinkFrontend { ...props } />
			) }
		</div>
		</Fragment>
	);
};
