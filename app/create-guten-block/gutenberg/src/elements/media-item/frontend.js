import classnames from 'classnames';
import MediaItemInspectorClasses from './classes';

export const MediaItemFrontend = ( props ) => {
	if ( ! props.attributes.displayMedia ) {
		return null;
	}

	return (
		<div class="col">
			<figure
				className={ 'media-item ' + classnames(props.className, ...MediaItemInspectorClasses( props )) }
			>
				<img
					alt={ props.attributes.mediaItemAlt }
					class="img-fluid"
					src={ props.attributes.mediaItemURL }
				/>
			</figure>
		</div>
	);
};
