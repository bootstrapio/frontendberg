const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import LayoutInspectorAttributes from './attributes';
import LayoutInspectorClasses from './classes';

export { LayoutInspectorAttributes, LayoutInspectorClasses };

function LayoutInspector( props ) {
	// Superscript
	const DisplaySuperscript = () => {
		return (
			<ToggleControl
				label = { 'Superscript' }
				checked  = { props.attributes.displaySuperscript }
				onChange = { onChangeDisplaySuperscript }
			/>
		);
	};
	const onChangeDisplaySuperscript = value => {
		props.setAttributes( { displaySuperscript: value } );
	};

	// Content
	const DisplayContent = () => {
	  return (
	    <ToggleControl
	      label = { 'Content' }
	      checked  = { props.attributes.contentDisplay }
	      onChange = { onChangeContentDisplay }
	    />
	  );
	};
	const onChangeContentDisplay = value => {
	  props.setAttributes( { contentDisplay: value } );
	};

	// Media
	const DisplayMedia = () => {
	  return (
	    <ToggleControl
	      label = { 'Media' }
	      checked  = { props.attributes.mediaDisplay }
	      onChange = { onChangeMediaDisplay }
	    />
	  );
	};
	const onChangeMediaDisplay = value => {
	  props.setAttributes( { mediaDisplay: value } );
	};

	// Inspector Display for Superscript Settings
	return (
		<PanelBody
			initialOpen = { true }
			title = { 'Components' }
		>
			<PanelRow>
				{ DisplaySuperscript() }
				{ DisplayContent() }
				{ DisplayMedia() }
			</PanelRow>
		</PanelBody>
	);
}

export default LayoutInspector;
