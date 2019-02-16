export const MediaFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<figure
			className={
				'block-media media-image ' +
				( props.attributes.mediaDeviceType + ' ' ) +
				( props.attributes.mediaDeviceType == 'device-none' || props.attributes.mediaDeviceType == 'device-macbook ' ? '' : props.attributes.mediaDeviceOrientation + ' ') +
				( props.attributes.mediaPlaceholder == false ? '' : 'preview ') +
				( ! props.attributes.mediaURL ? 'placeholder' : '')
			}
		>
			<img
				alt={ props.attributes.mediaAlt }
				className={( props.attributes.mediaDeviceType == 'device-none' ? 'img-fluid' : '' )}
				src={ props.attributes.mediaURL }
			/>
		</figure>
	);
};
