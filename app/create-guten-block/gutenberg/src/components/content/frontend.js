import { ContentH3Frontend } from '../../elements/content-h3/frontend';

export const ContentFrontend = ( props ) => {
	if ( ! props.attributes.displayContent ) {
		return null;
	}

	return (
		<div class='col'>
			{ props.attributes.contentDisplayHeadline && (
				<ContentH3Frontend { ...props } />
			) }
		</div>
	);
};
