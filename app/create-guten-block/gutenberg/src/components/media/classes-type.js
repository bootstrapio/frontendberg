export function MediaTypeClasses( props ) {
	return [
		{ 'media-image': 'media-image' === props.attributes.mediaType },
		{ 'media-video': 'media-video' === props.attributes.mediaType },
		{ 'placeholder': 'media-placeholder' === props.attributes.mediaType },
	];
};

export default MediaTypeClasses;
