const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';

export default class ContentH2Editor extends Component {
	onChangeContentH2 = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentH2: value } );
	};

	render() {
		return (
			<PlainText
				tagName= 'h2'
				className = 'h2'
				onChange = { this.onChangeContentH2 }
				placeholder = 'Culpa qui officia '
				value = { ! this.props.attributes.contentH2 ? '' : this.props.attributes.contentH2 }
			/>
		);
	}
}
