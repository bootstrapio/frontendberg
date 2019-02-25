const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';

export default class ContentH5Editor extends Component {
	onChangeContentH5 = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentH5: value } );
	};

	render() {
		return (
			<PlainText
				tagName= 'h5'
				className = 'h5'
				onChange = { this.onChangeContentH5 }
				placeholder = 'Elements H5'
				value = { ! this.props.attributes.contentH5 ? '' : this.props.attributes.contentH5 }
			/>
		);
	}
}
