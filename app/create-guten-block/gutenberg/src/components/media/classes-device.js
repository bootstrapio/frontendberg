export function MediaDeviceClasses( props ) {
	return [
		{ 'device-macbook': 'device-macbook' === props.attributes.mediaDevice },
		{ 'device-iphone': 'device-iphone' === props.attributes.mediaDevice },
		{ 'device-ipad': 'device-ipad' === props.attributes.mediaDevice },
		{ '': 'device-none' === props.attributes.mediaDevice },
	];
};

export default MediaDeviceClasses;
