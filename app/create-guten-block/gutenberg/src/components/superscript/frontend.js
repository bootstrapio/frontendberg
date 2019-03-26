import { ContentH5Frontend } from '../../elements/content-h5/frontend';
import { MediaIconFrontend } from '../../elements/media-icon/frontend';

export const SuperscriptFrontend = ( props ) => {
	if ( ! props.attributes.displaySuperscript ) {
		return null;
	}

	return (
		<div class='col superscript'>
			{ props.attributes.superscriptDisplayIcon && ( <MediaIconFrontend { ...props } /> ) }
			{ props.attributes.superscriptDisplayTitle && ( <ContentH5Frontend { ...props } /> ) }
		</div>
	);
};
