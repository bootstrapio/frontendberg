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

export {
	MediaAttributes,
	MediaFrontend,
	MediaDeviceClasses,
	MediaOrientationClasses,
	MediaPlaceholderClasses,
	MediaTypeClasses,
};

export default class MediaEditor extends Component {
	onSelectMedia = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaID: media.id,
			mediaImageAlt: media.alt,
			mediaImageURL: media.url,
		} );
	};

	onClickRemoveMedia = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaID: null,
			mediaImageAlt: null,
			mediaImageURL: null,
		} );
	};

	render() {
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
				{ ! this.props.attributes.mediaItemURL ? (
					/* <MediaUploadCheck> */
					<MediaUpload
						onSelect = { this.onSelectMedia }
						type = 'image'
						value = {this.props.attributes.mediaItemURL}
						render = { ( { open } ) => (
							<div class='gutenberg-update-item'>
								<span className='add'><i className='fas fa-plus-circle'></i></span>
								<Button className={ 'button button-large' } onClick={ open }></Button>
							</div>
						) }
					/>
					/* </MediaUploadCheck> */
				) : (
					<div class='gutenberg-update-item'>
						{ this.props.isSelected ? (<span className='remove' onClick={ this.onClickRemoveMedia }><i className='fas fa-minus-circle'></i></span>) : null }
						<img alt={ this.props.attributes.mediaItemAlt } class='img-fluid' src={ this.props.attributes.mediaItemURL } />
					</div>
				)}
			</figure>
		);
	}
}
