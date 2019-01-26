const { __ } = wp.i18n;
const { } = wp.editor;
const { Button, CheckboxControl, PanelBody, PanelRow } = wp.components;

import SuperscriptInspectorAttributes from './attributes';
import SuperscriptInspectorClasses from './classes';

export { SuperscriptInspectorAttributes, SuperscriptInspectorClasses };

function SuperscriptInspector( props ) {
	// Display Superscript
	const DisplaySuperscript = () => {
		return (
			<CheckboxControl
				label = { 'Display Superscript' }
				checked  = { props.attributes.superscriptDisplay }
				onChange = { onChangeSuperscriptDisplay }
			/>
		);
	};
	const onChangeSuperscriptDisplay = value => {
		props.setAttributes( { superscriptDisplay: value } );
	};

	// Display Superscript Icon
	const DisplaySuperscriptIcon = () => {
		if (props.attributes.superscriptDisplay === false) {
			return '';
		} else {
			return (
				<CheckboxControl
					label = { 'Display Icon' }
					checked  = { props.attributes.superscriptDisplayIcon }
					onChange = { onChangeSuperscriptDisplayIcon }
				/>
			);
		}
	};
	const onChangeSuperscriptDisplayIcon = value => {
		props.setAttributes( { superscriptDisplayIcon: value } );
	};

	// Display Superscript Title
	const DisplaySuperscriptTitle = () => {
		if (props.attributes.superscriptDisplay === false) {
			return '';
		} else {
			return (
				<CheckboxControl
					label = { 'Display Title' }
					checked  = { props.attributes.superscriptDisplayTitle }
					onChange = { onChangeSuperscriptDisplayTitle }
				/>
			);
		}
	};
	const onChangeSuperscriptDisplayTitle = value => {
		props.setAttributes( { superscriptDisplayTitle: value } );
	};

	// Inspector Display for Superscript Settings
	return (
		<PanelBody
			initialOpen = { false }
			title = { 'Superscript' }
		>
			<PanelRow>
				{ DisplaySuperscript() }
				{ DisplaySuperscriptIcon() }
				{ DisplaySuperscriptTitle() }
			</PanelRow>
		</PanelBody>
	);
}

export default SuperscriptInspector;
