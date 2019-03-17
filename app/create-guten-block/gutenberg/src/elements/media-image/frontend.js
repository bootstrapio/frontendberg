import classnames from 'classnames';

export const MediaImageFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<figure
			className={'media-item ' +
				( props.attributes.mediaOrientationType + ' ' ) +
				( props.attributes.mediaOrientationType == 'device-none' || props.attributes.mediaOrientationType == 'device-macbook' ? '' : props.attributes.mediaOrientation + ' ') +
				( props.attributes.mediaPlaceholder == false ? '' : 'placeholder')
			}
		>
			<img
				alt={ props.attributes.mediaImageAlt }
				class="img-fluid"
				src={ props.attributes.mediaImageURL }
			/>
		</figure>
	);
};
