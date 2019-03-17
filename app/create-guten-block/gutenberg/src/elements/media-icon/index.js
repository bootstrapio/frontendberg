const { __ } = wp.i18n;
const { Button } = wp.components;
const { Component } = wp.element;
const { MediaUpload } = wp.editor;

import classnames from 'classnames';
import { MediaIconClasses } from './classes';

export {
	MediaIconClasses,
};

export default class MediaIconEditor extends Component {
	onSelectMediaIcon = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaIconAlt: media.alt,
			mediaIconID: media.id,
			mediaIconURL: media.url,
		} );
	};

	onClickRemoveMediaIcon = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaIconAlt: null,
			mediaIconID: null,
			mediaIconURL: null,
		} );
	};

	render() {
		return (

			<figure
				className={ 'media-icon ' + classnames(
					this.props.className,
					...MediaIconClasses( this.props ),
				)}
			>
				{ ! this.props.attributes.mediaIconURL ? (
					/* <MediaUploadCheck> */
					<MediaUpload
						onSelect = { this.onSelectMediaIcon }
						type = 'image'
						value = {this.props.attributes.mediaIconURL}
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
						{ this.props.isSelected ? (<span className='remove' onClick={ this.onClickRemoveMediaIcon }><i className='fas fa-minus-circle'></i></span>) : null }
						<img alt={ this.props.attributes.mediaIconAlt } class='img-fluid' src={ this.props.attributes.mediaIconURL } />
					</div>
				)}
			</figure>
		);
	}
}
