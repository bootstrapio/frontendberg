import classnames from 'classnames';
import MediaItemInspectorClasses from './classes';

export const MediaItemFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<figure
			className={'media-item ' +
				( props.attributes.mediaDeviceType + ' ' ) +
				( props.attributes.mediaDeviceType == 'device-none' || props.attributes.mediaDeviceType == 'device-macbook' ? '' : props.attributes.mediaDeviceOrientation + ' ') +
				( props.attributes.mediaPlaceholder == false ? '' : 'placeholder')
			}
		>
			<img
				alt={ props.attributes.mediaItemAlt }
				class="img-fluid"
				src={ props.attributes.mediaItemURL }
			/>
		</figure>
	);
};
