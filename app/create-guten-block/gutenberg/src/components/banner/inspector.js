const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

import BannerInspectorAttributes from './inspector-attributes';

export { BannerInspectorAttributes };

function BannerInspector( props ) {
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
				label = 'Layout'
				onChange = { onChangeBannerStyle }
				options = {[
					{ label: 'One', value: 'layout-one' },
					{ label: 'Two', value: 'layout-two' },
					{ label: 'Three', value: 'layout-three' }
				]}
				value = { props.attributes.layoutStyle }
			/>
		);
	};
	const onChangeBannerStyle = value => {
		props.setAttributes( { layoutStyle: value } );
	};

	return (
		<PanelBody
			initialOpen = { true }
			title = { 'Settings' }
		>
			<PanelRow>
				{ DisplaySuperscript() }
				{ LayoutStyle() }
			</PanelRow>
		</PanelBody>
	);
}

export default BannerInspector;
