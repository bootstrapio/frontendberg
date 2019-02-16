const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import ContentInspectorAttributes from './attributes';
import ContentInspectorClasses from './classes';

export { ContentInspectorAttributes, ContentInspectorClasses };

function ContentInspector( props ) {
	if ( ! props.attributes.displayContent ) {
		return null;

	} else {

		// Content Paragraph
		const DisplayContentParagraph = () => {
			return (
				<ToggleControl
					label = { 'Paragraph' }
					checked  = { props.attributes.contentDisplayParagraph }
					onChange = { onChangeContentDisplayParagraph }
				/>
			);
		};
		const onChangeContentDisplayParagraph = value => {
			props.setAttributes( { contentDisplayParagraph: value } );
		};

		// Content Link
		const DisplayContentLink = () => {
			return (
				<ToggleControl
					label = { 'Link' }
					checked  = { props.attributes.contentDisplayLink }
					onChange = { onChangeContentDisplayLink }
				/>
			);
		};
		const onChangeContentDisplayLink = value => {
			props.setAttributes( { contentDisplayLink: value } );
		};

		// Content Inspector
		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Content' }
			>
				<PanelRow>
					{ DisplayContentParagraph() }
					{ DisplayContentLink() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default ContentInspector;
