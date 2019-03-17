export function MediaOrientationClasses( props ) {
	return [
		{ 'landscape': 'orientation-landscape' === props.attributes.mediaOrientation },
		{ 'portrait': 'orientation-portrait' === props.attributes.mediaOrientation },
	];
};

export default MediaOrientationClasses;
