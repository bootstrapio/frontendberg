const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import ContentInspectorAttributes from './inspector-attributes';

export { ContentInspectorAttributes };

function ContentInspector( props ) {
	if ( ! props.attributes.displayContent ) {
		return null;
	} else {

		const DisplayContentHeadline = () => {
			return (
				<ToggleControl
					label = { 'Headline' }
					checked  = { props.attributes.contentDisplayHeadline }
					onChange = { onChangeContentDisplayHeadline }
				/>
			);
		};
		const onChangeContentDisplayHeadline = value => {
			props.setAttributes( { contentDisplayHeadline: value } );
		};

		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Content' }
			>
				<PanelRow>
					{ DisplayContentHeadline() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default ContentInspector;
