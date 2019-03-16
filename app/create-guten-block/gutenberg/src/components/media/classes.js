function MediaInspectorClasses( props ) {
	return [
		{ 'media-image': 'media-image' === props.attributes.mediaType },
		{ 'media-video': 'media-video' === props.attributes.mediaType },
	];
}

export default MediaInspectorClasses;
