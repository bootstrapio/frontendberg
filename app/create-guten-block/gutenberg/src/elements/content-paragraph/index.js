const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText } = wp.editor;

import classnames from 'classnames';

export default class ContentParagraphEditor extends Component {
	onChangeContentParagraph = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentParagraph: value } );
	};

	render() {
		return (
			<RichText
				tagName = 'div'
				className = 'content-paragraph'
				keepPlaceholderOnFocus = { true }
				multiline = { true }
				onChange = { this.onChangeContentParagraph }
				placeholder = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.'
				value = { ! this.props.attributes.contentParagraph ? '' : this.props.attributes.contentParagraph }
			/>
		);
	}
}
