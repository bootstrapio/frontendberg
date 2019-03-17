import classnames from 'classnames';
import { MediaDeviceClasses } from './classes-device';
import { MediaOrientationClasses } from './classes-orientation';
import { MediaPlaceholderClasses } from './classes-placeholder';
import { MediaTypeClasses } from './classes-type';

export const MediaFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<figure
			className={ 'media-item ' + classnames(
				props.className,
				...MediaDeviceClasses( props ),
				...MediaOrientationClasses( props ),
				...MediaPlaceholderClasses( props ),
				...MediaTypeClasses( props ),
			)}
		>
			<img
				alt={ props.attributes.mediaItemAlt }
				class="img-fluid"
				src={ props.attributes.mediaItemURL }
			/>
		</figure>
	);
};
