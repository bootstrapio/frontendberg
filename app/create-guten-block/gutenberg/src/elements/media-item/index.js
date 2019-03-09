const { __ } = wp.i18n;
const { Button } = wp.components;
const { Component } = wp.element;
const { MediaUpload } = wp.editor;

import classnames from 'classnames';
import { MediaItemAttributes } from './attributes';
import { MediaItemFrontend } from './frontend';
import { MediaItemInspectorClasses } from './classes';

export { MediaItemAttributes, MediaItemFrontend, MediaItemInspectorClasses };

export default class MediaItemEditor extends Component {
	onSelectMediaItem = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaItemAlt: media.alt,
			mediaItemID: media.id,
			mediaItemURL: media.url,
		} );
	};

	onClickRemoveMediaItem = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaItemAlt: null,
			mediaItemID: null,
			mediaItemURL: null,
		} );
	};

	render() {
		return (
			<figure
				className={'media-item ' +
					( this.props.attributes.mediaDeviceType + ' ' ) +
					( this.props.attributes.mediaDeviceType == 'device-none' || this.props.attributes.mediaDeviceType == 'device-macbook' ? '' : this.props.attributes.mediaDeviceOrientation + ' ') +
					( this.props.attributes.mediaPlaceholder == false ? '' : 'placeholder')
				}
			>
				{ ! this.props.attributes.mediaItemURL ? (
					/* <MediaUploadCheck> */
					<MediaUpload
						onSelect = { this.onSelectMediaItem }
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
						{ this.props.isSelected ? (<span className='remove' onClick={ this.onClickRemoveMediaItem }><i className='fas fa-minus-circle'></i></span>) : null }
						<img alt={ this.props.attributes.mediaItemAlt } class='img-fluid' src={ this.props.attributes.mediaItemURL } />
					</div>
				)}
			</figure>
		);
	}
}
