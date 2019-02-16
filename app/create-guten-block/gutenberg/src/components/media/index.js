import classnames from 'classnames';

/** Import our attributes. **/
import { MediaAttributes } from './attributes';
import { MediaFrontend } from './frontend';

/** Export for ease of importing in individual blocks. **/
export { MediaAttributes, MediaFrontend };

/** Internal block libraries **/
const { __ } = wp.i18n;
const { Component } = wp.element;
const { MediaUpload } = wp.editor;
const { Button } = wp.components;

export default class Media extends Component {
	onSelectMedia = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaAlt: media.alt,
			mediaID: media.id,
			mediaURL: media.url
		} );
	};

	onClickRemoveMedia = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaAlt: null,
			mediaID: null,
			mediaURL: null,
		} );
	};

	render() {
		if ( ! this.props.attributes.displayMedia ) {
			return null;
		}

		return (
			<figure
				className={
					'block-media media-image ' +
					( this.props.attributes.mediaDeviceType + ' ' ) +
					( this.props.attributes.mediaDeviceType == 'device-none' || this.props.attributes.mediaDeviceType == 'device-macbook' ? '' : this.props.attributes.mediaDeviceOrientation + ' ') +
					( this.props.attributes.mediaPlaceholder == false ? '' : 'preview ') +
					( ! this.props.attributes.mediaURL ? ' placeholder' : '')
				}
			>
				{ ! this.props.attributes.mediaURL ? (
					/* <MediaUploadCheck> */
					<MediaUpload
						onSelect = { this.onSelectMedia }
						type = 'image'
						value = {this.props.attributes.mediaURL}
						render = { ( { open } ) => (
							<div class="gutenberg-update-item">
								<span className="add"><i className="fas fa-plus-circle"></i></span>
								<Button className={ 'button button-large' } onClick={ open }></Button>
							</div>
						) }
					/>
					/* </MediaUploadCheck> */
				) : (
					<div class="gutenberg-update-item">
						{ this.props.isSelected ? (<span className="remove" onClick={ this.onClickRemoveMedia }><i className="fas fa-minus-circle"></i></span>) : null }
						<img
							alt={ this.props.attributes.mediaURL }
							className={( this.props.attributes.mediaDeviceType == 'device-none' ? 'img-fluid' : '' )}
							src={ this.props.attributes.mediaURL }
						/>
					</div>
				)}
			</figure>
		);
	}
}
