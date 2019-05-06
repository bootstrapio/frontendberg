const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

import TabInspectorAttributes from './inspector-attributes';

export { TabInspectorAttributes };

function TabInspector( props ) {

	const LayoutStyle = () => {
		return (
			<SelectControl
				label = 'Layout'
				onChange = { onChangeTabStyle }
				options = {[
					{ label: 'Horizontal', value: 'layout-one' },
					{ label: 'Vertical', value: 'layout-two' }
				]}
				value = { props.attributes.layoutStyle }
			/>
		);
	};
	const onChangeTabStyle = value => {
		props.setAttributes( { layoutStyle: value } );
	};

	return (
		<PanelBody
			initialOpen = { true }
			title = { 'Settings' }
		>
			<PanelRow>
				{ LayoutStyle() }
			</PanelRow>
		</PanelBody>
	);
}

export default TabInspector;
