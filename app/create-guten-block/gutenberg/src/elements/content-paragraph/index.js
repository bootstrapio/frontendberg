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
				multiline = 'p'
				onChange = { this.onChangeContentParagraph }
				placeholder = 'Elements Paragraph'
				value = { ! this.props.attributes.contentParagraph ? '' : this.props.attributes.contentParagraph }
			/>
		);
	}
}
