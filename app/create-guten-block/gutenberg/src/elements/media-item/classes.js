function MediaItemInspectorClasses( props ) {
	return [
		{ 'landscape': 'landscape' === props.attributes.mediaDeviceOrientation },
		{ 'portrait': 'portrait' === props.attributes.mediaDeviceOrientation },
		{ 'device-iphone': 'device-iphone' === props.attributes.mediaDeviceType },
		{ 'device-ipad': 'device-ipad' === props.attributes.mediaDeviceType },
		{ 'device-macbook': 'device-macbook' === props.attributes.mediaDeviceType },
		{ 'placeholder' : true === props.attributes.mediaPlaceholder },
	];
}

export default MediaItemInspectorClasses;
