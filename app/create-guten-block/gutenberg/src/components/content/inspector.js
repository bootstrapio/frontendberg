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

		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Content' }
			>
				<PanelRow>
					{ DisplayContentHeadline() }
					{ DisplayContentParagraph() }
					{ DisplayContentLink() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default ContentInspector;
