const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';

export default class ContentH1Editor extends Component {
	onChangeContentH1 = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentH1: value } );
	};

	render() {
		return (
			<PlainText
				tagName= 'h1'
				className = 'h1'
				onChange = { this.onChangeContentH1 }
				placeholder = 'Itaque Earum Rerum'
				value = { ! this.props.attributes.contentH1 ? '' : this.props.attributes.contentH1 }
			/>
		);
	}
}
