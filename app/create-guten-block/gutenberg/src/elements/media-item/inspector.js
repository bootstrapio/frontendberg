const { __ } = wp.i18n;
const { MediaUpload, /* MediaUploadCheck, */ } = wp.editor;
const { CheckboxControl, PanelBody, PanelRow, RadioControl, SelectControl } = wp.components;

import MediaItemInspectorAttributes from './inspector-attributes';

export { MediaItemInspectorAttributes };

function MediaInspector( props ) {
	if ( ! props.attributes.displayMedia ) {
		return null;
	} else {

		const DisplayMediaDeviceType = () => {
			return (
				<SelectControl
					label = 'Device Type'
					onChange = { onChangeMediaDeviceType }
					options = {[
						{ label: 'Macbook', value: 'device-macbook' },
						{ label: 'iPhone', value: 'device-iphone' },
						{ label: 'iPad', value: 'device-ipad' },
						{ label: 'None', value: 'device-none' },
						// { label: 'iWatch', value: 'iWatch' },
						// { label: 'Apple TV', value: 'appletv' }
					]}
					value = { props.attributes.mediaDeviceType }
				/>
			);
		};
		const onChangeMediaDeviceType = value => {
			props.setAttributes( { mediaDeviceType: value } );
		};

		const DisplayMediaDeviceOrientation = () => {
			if ( ( 'device-none' == props.attributes.mediaDeviceType ) || ('device-macbook' == props.attributes.mediaDeviceType) ) {
				return '';
			}
			return (
				<RadioControl
	        label={ 'Orientation' }
	        selected = { props.attributes.mediaDeviceOrientation }
	        options={ [
	            { label: 'Landscape', value: 'landscape' },
	            { label: 'Portrait', value: 'portrait' }
	        ] }
	        onChange={ SelectMediaDeviceOrientation }
	      />
			);
		};
		const SelectMediaDeviceOrientation = value => {
			props.setAttributes( { mediaDeviceOrientation: value } );
		};

		const DisplayMediaPlaceholder = () => {
			if ( ( 'device-none' == props.attributes.mediaDeviceType ) ) {
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
					{ DisplayMediaDeviceType() }
					{ DisplayMediaDeviceOrientation() }
					{ DisplayMediaPlaceholder() }
				</PanelRow>
			</PanelBody>
		);
	}
}

export default MediaInspector;
