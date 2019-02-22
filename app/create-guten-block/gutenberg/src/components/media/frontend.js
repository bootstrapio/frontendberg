export const MediaFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<div class="col">
			<figure
				className={
					'group-media media-image ' +
					( props.attributes.mediaDeviceType + ' ' ) +
					( props.attributes.mediaDeviceType == 'device-none' || props.attributes.mediaDeviceType == 'device-macbook ' ? '' : props.attributes.mediaDeviceOrientation + ' ') +
					( props.attributes.mediaPlaceholder == false ? '' : 'placeholder')
				}
			>
				<img
					alt={ props.attributes.mediaAlt }
					className={( props.attributes.mediaDeviceType == 'device-none' ? 'img-fluid' : '' )}
					src={ props.attributes.mediaURL }
				/>
			</figure>
		</div>
	);
};
