const { __ } = wp.i18n;
const { } = wp.editor;
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;

import MediaInspectorAttributes from './inspector-attributes';
import MediaInspectorClasses from './classes';

export { MediaInspectorAttributes, MediaInspectorClasses };

function MediaInspector( props ) {
	const MediaType = () => {
		return (
			<SelectControl
				label = 'Media Type'
				onChange = { onChangeMediaType }
				options = {[
					{ label: 'Image', value: 'media-image' },
					{ label: 'Video', value: 'media-video' }
				]}
				value = { props.attributes.mediaType }
			/>
		);
	};
	const onChangeMediaType = value => {
		props.setAttributes( { mediaType: value } );
	};

	return (
		<PanelBody
			initialOpen = { true }
			title = { 'Media' }
		>
			<PanelRow>
				{ MediaType() }
			</PanelRow>
		</PanelBody>
	);
}

export default MediaInspector;
