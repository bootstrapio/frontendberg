const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

import IntroInspectorAttributes from './inspector-attributes';

export { IntroInspectorAttributes };

function IntroInspector( props ) {
	if ( ! props.attributes.displayIntro ) {
		return null;
	} else {

		const DisplayIntroHeadline = () => {
			return (
				<ToggleControl
					label = { 'Headline' }
					checked  = { props.attributes.introDisplayHeadline }
					onChange = { onChangeIntroDisplayHeadline }
				/>
			);
		};
		const onChangeIntroDisplayHeadline = value => {
			props.setAttributes( { introDisplayHeadline: value } );
		};

	  const DisplayIntroParagraph = () => {
	    return (
	      <ToggleControl
	        label = { 'Paragraph' }
	        checked  = { props.attributes.introDisplayParagraph }
	        onChange = { onChangeIntroDisplayParagraph }
	      />
	    );
	  };
	  const onChangeIntroDisplayParagraph = value => {
	    props.setAttributes( { introDisplayParagraph: value } );
	  };

	  const DisplayIntroLink = () => {
	    return (
	      <ToggleControl
	        label = { 'Link' }
	        checked  = { props.attributes.introDisplayLink }
	        onChange = { onChangeIntroDisplayLink }
	      />
	    );
	  };
	  const onChangeIntroDisplayLink = value => {
	    props.setAttributes( { introDisplayLink: value } );
	  };

		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Content' }
			>
				<PanelRow>
					{ DisplayIntroHeadline() }
					{ DisplayIntroParagraph() }
					{ DisplayIntroLink() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default IntroInspector;
