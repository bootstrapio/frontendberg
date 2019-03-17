const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import classnames from 'classnames';
import ContentInspectorAttributes from './inspector-attributes';

export { ContentInspectorAttributes };

function ContentInspector( props ) {
	if ( ! props.attributes.displayContent ) {
		return null;
	} else {

		const DisplayContentH2 = () => {
			return (
				<ToggleControl
					label = { 'Headline' }
					checked  = { props.attributes.contentDisplayH2 }
					onChange = { onChangeContentDisplayH2 }
				/>
			);
		};
		const onChangeContentDisplayH2 = value => {
			props.setAttributes( { contentDisplayH2: value } );
		};

		const DisplayContentH3 = () => {
			return (
				<ToggleControl
					label = { 'Headline' }
					checked  = { props.attributes.contentDisplayH3 }
					onChange = { onChangeContentDisplayH3 }
				/>
			);
		};
		const onChangeContentDisplayH3 = value => {
			props.setAttributes( { contentDisplayH3: value } );
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
					{ classnames(props.className) == 'wp-block-frontendberg-intro' && ( DisplayContentH2() ) }
					{ classnames(props.className) == 'wp-block-frontendberg-layout' && ( DisplayContentH3() ) }
					{ DisplayContentParagraph() }
					{ DisplayContentLink() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default ContentInspector;
