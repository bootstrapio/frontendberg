const { __ } = wp.i18n;
const { } = wp.editor;
const { CheckboxControl, PanelBody, PanelRow, RadioControl, SelectControl, ToggleControl } = wp.components;

import MediaInspectorAttributes from './inspector-attributes';

export { MediaInspectorAttributes };

function MediaInspector( props ) {
	if ( ! props.attributes.displayMedia ) {
		return null;
	} else {

		const MediaType = () => {
			return (
				<SelectControl
					label = 'Type'
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

		const DisplayMediaDevice = () => {
			return (
				<SelectControl
					label = 'Device'
					onChange = { onChangeMediaDevice }
					options = {[
						{ label: 'Macbook', value: 'device-macbook' },
						{ label: 'iPhone', value: 'device-iphone' },
						{ label: 'iPad', value: 'device-ipad' },
						{ label: 'None', value: 'device-none' },
						// { label: 'iWatch', value: 'iWatch' },
						// { label: 'Apple TV', value: 'appletv' }
					]}
					value = { props.attributes.mediaDevice }
				/>
			);
		};
		const onChangeMediaDevice = value => {
			props.setAttributes( { mediaDevice: value } );
		};

		const DisplayMediaOrientation = () => {
			if ( ( 'device-ipad' == props.attributes.mediaDevice ) || ('device-iphone' == props.attributes.mediaDevice) ) {
				return (
					<RadioControl
						label={ 'Orientation' }
						selected = { props.attributes.mediaOrientation }
						options={ [
								{ label: 'Landscape', value: 'orientation-landscape' },
								{ label: 'Portrait', value: 'orientation-portrait' }
						] }
						onChange={ selectMediaOrientation }
					/>
				);
			}
			return '';
		};
		const selectMediaOrientation = value => {
			props.setAttributes( { mediaOrientation: value } );
		};

		const DisplayMediaPlaceholder = () => {
			if ( ( 'device-none' == props.attributes.mediaDevice ) ) {
				return '';
			}

			return (
				<CheckboxControl
					label = { 'Preview Placeholder' }
					checked  = { props.attributes.mediaPlaceholder }
					onChange = { onChangeMediaPlaceholder }
				/>
			);
		};
		const onChangeMediaPlaceholder = value => {
			props.setAttributes( { mediaPlaceholder: value } );
		};

		return (
			<PanelBody
				initialOpen = { true }
				title = { 'Media' }
			>
				<PanelRow>
					{ MediaType() }
					{ DisplayMediaDevice() }
					{ DisplayMediaOrientation() }
					{ DisplayMediaPlaceholder() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default MediaInspector;
