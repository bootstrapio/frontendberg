import classnames from 'classnames';
import { ContentH5Attributes } from './attributes';
import { ContentH5Frontend } from './frontend';

export { ContentH5Attributes, ContentH5Frontend };

const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

export default class ContentH5Editor extends Component {
	onChangeContentH5 = value => {
		const { setAttributes } = this.props;
		setAttributes( { contentH5: value } );
	};

	render() {
		return (
			<h5>
				<PlainText
					onChange ={ this.onChangeContentH5 }
					placeholder = 'Content H5'
					value = { ! this.props.attributes.contentH5 ? '' : this.props.attributes.contentH5 }
				/>
			</h5>
		);
	}
}
