import { ContentH5Frontend } from '../../elements/content-h5/frontend';

export const SuperscriptFrontend = ( props ) => {
	if ( ! props.attributes.displaySuperscript ) {
		return null;
	}

	return (
		<div class='col superscript'>
			<ContentH5Frontend { ...props } />
		</div>
	);
};
