const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText } = wp.editor;

import classnames from 'classnames';

export default class ContentLinkEditor extends Component {
	onChangeContentLink = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentLink: value } );
	};

	render() {
		return (
			<RichText
				tagName = 'div'
				className = 'content-link'
				formattingControls = { [ 'link' ] }
				keepPlaceholderOnFocus = { true }
				onChange = { this.onChangeContentLink }
				placeholder = 'Elements Link'
				value = { ! this.props.attributes.contentLink ? '' : this.props.attributes.contentLink }
			/>
		);
	}
}
