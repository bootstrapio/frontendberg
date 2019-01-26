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
	onChangeSuperscriptTitle = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptTitle: value
		} );
	};

	onClickRemoveSuperscriptIcon = () => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptIconAlt: null,
			superscriptIconURL: null,
		} );
	};

	onSelectSuperscriptIcon = media => {
		const { setAttributes } = this.props;
		setAttributes( {
			superscriptIconAlt: media.alt,
			superscriptIconURL: media.url,
		} );
	};

	render() {
		if ( ! this.props.attributes.superscriptDisplay ) {
			return null;
		}

		return (
			<h4 className = 'superscript'>
				{ this.props.attributes.superscriptDisplayIcon && (
				<figure className = {'media-icon ' + ( ! this.props.attributes.superscriptIconURL ? ' placeholder' : '')}>
					{ ! this.props.attributes.superscriptIconURL ? (
						<MediaUpload
							onSelect = { this.onSelectSuperscriptIcon }
							type = 'image'
							value = {this.props.attributes.superscriptIconURL}
							render = { ( { open } ) => (
								<div class="gutenberg-update-item">
									<span className="add"><i className="fas fa-plus-circle"></i></span>
									<Button className={ 'button button-large' } onClick={ open }></Button>
								</div>
							) }
						/>
					) : (
						<div class="gutenberg-update-item">
							{ this.props.isSelected ? (
								<span className="remove" onClick={ this.onClickRemoveSuperscriptIcon }><i className="fas fa-minus-circle"></i></span>
							) : null }
							<img alt={ this.props.attributes.superscriptIconAlt } class="img-fluid" src={ this.props.attributes.superscriptIconURL } />
						</div>
					)}
				</figure>
				) }
				{ this.props.attributes.superscriptDisplayTitle && (
					<PlainText
						tagName = 'span'
						keepPlaceholderOnFocus = { true }
						onChange = { this.onChangeSuperscriptTitle }
						placeholder = { 'Sed Do Eiusmod' }
						value = { this.props.attributes.superscriptTitle }
					/>
				) }
			</h4>
		);
	}
}
