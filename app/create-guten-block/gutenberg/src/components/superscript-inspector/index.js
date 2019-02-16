const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import SuperscriptInspectorAttributes from './attributes';
import SuperscriptInspectorClasses from './classes';

export { SuperscriptInspectorAttributes, SuperscriptInspectorClasses };

function SuperscriptInspector( props ) {
	if ( ! props.attributes.displaySuperscript ) {
		return null;

	} else {

		// Superscript Icon
		const DisplaySuperscriptIcon = () => {
			return (
				<ToggleControl
					label = { 'Icon' }
					checked  = { props.attributes.superscriptDisplayIcon }
					onChange = { onChangeSuperscriptDisplayIcon }
				/>
			);
		};
		const onChangeSuperscriptDisplayIcon = value => {
			props.setAttributes( { superscriptDisplayIcon: value } );
		};

		// Superscript Title
		const DisplaySuperscriptTitle = () => {
			return (
				<ToggleControl
					label = { 'Title' }
					checked  = { props.attributes.superscriptDisplayTitle }
					onChange = { onChangeSuperscriptDisplayTitle }
				/>
			);
		};
		const onChangeSuperscriptDisplayTitle = value => {
			props.setAttributes( { superscriptDisplayTitle: value } );
		};

		// Superscript Inspector
		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Superscript' }
			>
				<PanelRow>
					{ DisplaySuperscriptIcon() }
					{ DisplaySuperscriptTitle() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default SuperscriptInspector;
