const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

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
	      checked  = { props.attributes.displayContent }
	      onChange = { onChangeContentDisplay }
	    />
	  );
	};
	const onChangeContentDisplay = value => {
	  props.setAttributes( { displayContent: value } );
	};

	// Media
	const DisplayMedia = () => {
	  return (
	    <ToggleControl
	      label = { 'Media' }
	      checked  = { props.attributes.displayMedia }
	      onChange = { onChangeMediaDisplay }
	    />
	  );
	};
	const onChangeMediaDisplay = value => {
	  props.setAttributes( { displayMedia: value } );
	};

	// Layout Type
	const LayoutStyle = () => {
		return (
			<SelectControl
				label = 'Layout Style'
				onChange = { onChangeLayoutStyle }
				options = {[
					{ label: 'One', value: 'layout-one' },
					{ label: 'Two', value: 'layout-two' },
					{ label: 'Three', value: 'layout-three' }
				]}
				value = { props.attributes.layoutStyle }
			/>
		);
	};
	const onChangeLayoutStyle = value => {
		props.setAttributes( { layoutStyle: value } );
	};

	// Inspector Display for Superscript Settings
	return (
		<PanelBody
			initialOpen = { true }
			title = { 'Settings' }
		>
			<PanelRow>
				{ DisplaySuperscript() }
				{ DisplayContent() }
				{ DisplayMedia() }
				{ LayoutStyle() }
			</PanelRow>
		</PanelBody>
	);
}

export default LayoutInspector;
