const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import SuperscriptInspectorAttributes from './inspector-attributes';

export { SuperscriptInspectorAttributes };

function SuperscriptInspector( props ) {
	if ( ! props.attributes.displaySuperscript ) {
		return null;
	} else {

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
