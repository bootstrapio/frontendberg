import classnames from 'classnames';
import { MediaIconClasses } from './classes';

export const MediaIconFrontend = ( props ) => {
	return (
		<figure
			className={ 'media-icon ' + classnames(
				props.className,
				...MediaIconClasses( props ),
			)}
		>
			<img alt={ props.attributes.mediaIconAlt } class='img-fluid' src={ props.attributes.mediaIconURL } />
		</figure>
	);
};
