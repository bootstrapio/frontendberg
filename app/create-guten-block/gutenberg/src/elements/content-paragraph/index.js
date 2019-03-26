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
				multiline = 'p'
				onChange = { this.onChangeContentParagraph }
				placeholder = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
				value = { ! this.props.attributes.contentParagraph ? '' : this.props.attributes.contentParagraph }
			/>
		);
	}
}
