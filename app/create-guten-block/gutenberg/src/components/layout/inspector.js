const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

import LayoutInspectorAttributes from './inspector-attributes';
import LayoutInspectorClasses from './classes';

export { LayoutInspectorAttributes, LayoutInspectorClasses };

function LayoutInspector( props ) {
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
