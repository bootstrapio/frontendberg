const { __ } = wp.i18n;
const { Button } = wp.components;
const { Component } = wp.element;
const { MediaUpload } = wp.editor;

import classnames from 'classnames';
import { MediaAttributes } from './attributes';
import { MediaFrontend } from './frontend';
import { MediaDeviceClasses } from './classes-device';
import { MediaOrientationClasses } from './classes-orientation';
import { MediaPlaceholderClasses } from './classes-placeholder';
import { MediaTypeClasses } from './classes-type';
import MediaImageEditor from '../../elements/media-image/';

export {
	MediaAttributes,
	MediaFrontend,
	MediaDeviceClasses,
	MediaOrientationClasses,
	MediaPlaceholderClasses,
	MediaTypeClasses,
};

export default class MediaEditor extends Component {
	render() {
		if ( ! this.props.attributes.displayMedia ) {
			return null;
		}

		return (
			<figure
				className={ 'media-item ' + classnames(
					this.props.className,
					...MediaDeviceClasses( this.props ),
					...MediaOrientationClasses( this.props ),
					...MediaPlaceholderClasses( this.props ),
					...MediaTypeClasses( this.props ),
				)}
			>
				{ this.props.attributes.mediaType == 'media-image' && (
					<MediaImageEditor { ...this.props } />
				)}
			</figure>
		);
	}
}
