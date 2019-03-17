const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

import IntroInspectorAttributes from './inspector-attributes';

export { IntroInspectorAttributes };

function IntroInspector( props ) {
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
				label = 'Intro Style'
				onChange = { onChangeIntroStyle }
				options = {[
					{ label: 'One', value: 'layout-one' },
					{ label: 'Two', value: 'layout-two' },
					{ label: 'Three', value: 'layout-three' }
				]}
				value = { props.attributes.layoutStyle }
			/>
		);
	};
	const onChangeIntroStyle = value => {
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
			</PanelRow>
		</PanelBody>
	);
}

export default IntroInspector;
