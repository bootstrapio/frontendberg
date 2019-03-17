const { __ } = wp.i18n;
const { Button } = wp.components;
const { Component, Fragment } = wp.element;
const { MediaUpload } = wp.editor;

import classnames from 'classnames';

export default class MediaImageEditor extends Component {
	onSelectMedia = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaImageAlt: media.alt,
			mediaImageURL: media.url,
		} );
	};

	onClickRemoveMedia = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			mediaImageAlt: null,
			mediaImageURL: null,
		} );
	};

	render() {
		return (
			<Fragment>
				{ ! this.props.attributes.mediaImageURL ? (
					/* <MediaUploadCheck> */
					<MediaUpload
						onSelect = { this.onSelectMedia }
						type = 'image'
						value = {this.props.attributes.mediaImageURL}
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
						<img alt={ this.props.attributes.mediaImageAlt } class='img-fluid' src={ this.props.attributes.mediaImageURL } />
					</div>
				)}
			</Fragment>
		);
	}
}
