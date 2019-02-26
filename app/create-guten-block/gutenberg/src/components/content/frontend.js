const { Fragment } = wp.element;

import { ContentH3Frontend } from '../../elements/content-h3/frontend';
import { ContentParagraphFrontend } from '../../elements/content-paragraph/frontend';

export const ContentFrontend = ( props ) => {
	if ( ! props.attributes.displayContent ) {
		return null;
	}

	return (
		<Fragment>
		<div class='col'>
			{ props.attributes.contentDisplayHeadline && (
				<ContentH3Frontend { ...props } />
			) }
		</div>
		<div class='col'>
			{ props.attributes.contentDisplayParagraph && (
				<ContentParagraphFrontend { ...props } />
			) }
		</div>
		</Fragment>
	);
};
