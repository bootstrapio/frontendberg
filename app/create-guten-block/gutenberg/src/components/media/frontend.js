import classnames from 'classnames';
import { MediaDeviceClasses } from './classes-device';
import { MediaOrientationClasses } from './classes-orientation';
import { MediaPlaceholderClasses } from './classes-placeholder';
import { MediaTypeClasses } from './classes-type';
import { MediaImageFrontend } from '../../elements/media-image/frontend';

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
			{ props.attributes.mediaType == 'media-image' && (
				<MediaImageFrontend { ...props } />
			)}
		</figure>
	);
};
