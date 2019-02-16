/** External dependencies **/
import classnames from 'classnames';

/** Imports **/
import { SuperscriptAttributes } from './attributes';
import { SuperscriptFrontend } from './frontend';

/** Export for ease of importing in individual blocks. **/
export { SuperscriptAttributes, SuperscriptFrontend };

/** Internal Libraries **/
const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText, MediaUpload } = wp.editor;
const { Button } = wp.components;

export default class Superscript extends Component {
	// Superscript Title
	onChangeSuperscriptTitle = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptTitle: value
		} );
	};

	// Superscript Icon | Remove
	onClickRemoveSuperscriptIcon = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptIconAlt: null,
			superscriptIconURL: null,
		} );
	};

	// Superscript Icon | Add
	onSelectSuperscriptIcon = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptIconAlt: media.alt,
			superscriptIconURL: media.url,
		} );
	};

	render() {
		if ( ! this.props.attributes.displaySuperscript ) {
			return null;
		}

		return (
			<div class='col superscript'>

			{ this.props.attributes.superscriptDisplayIcon && (
				<figure className = {'block-media media-icon ' + ( ! this.props.attributes.superscriptImageURL ? ' placeholder' : '')}>
					{ ! this.props.attributes.superscriptImageURL ? (
						/* <MediaUploadCheck> */
						<MediaUpload
							onSelect = { this.onSelectSuperscriptImage }
							type = 'image'
							value = {this.props.attributes.superscriptImageURL}
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
							{ this.props.isSelected ? (<span className="remove" onClick={ this.onClickRemoveSuperscriptImage }><i className="fas fa-minus-circle"></i></span>) : null }
							<img alt={ this.props.attributes.superscriptImageAlt } class="img-fluid" src={ this.props.attributes.superscriptImageURL } />
						</div>
					)}
				</figure>
				) }
				{ this.props.attributes.superscriptDisplayTitle && (
					<PlainText
						tagName = 'h5'
						className= 'h5'
						keepPlaceholderOnFocus = { true }
						onChange = { this.onChangeSuperscriptTitle }
						placeholder = { 'Sed Do Eiusmod' }
						value = { this.props.attributes.superscriptTitle }
					/>
				) }
			</div>
		);
	}
}
