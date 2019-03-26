const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';

export default class ContentH3Editor extends Component {
	onChangeContentH3 = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentH3: value } );
	};

	render() {
		return (
			<PlainText
				tagName= 'h3'
				className = 'h3'
				onChange = { this.onChangeContentH3 }
				placeholder = 'Anim Id Est Laborum'
				value = { ! this.props.attributes.contentH3 ? '' : this.props.attributes.contentH3 }
			/>
		);
	}
}
