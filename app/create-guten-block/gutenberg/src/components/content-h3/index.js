import classnames from 'classnames';
import { ContentH3Attributes } from './attributes';
import { ContentH3Frontend } from './frontend';

export { ContentH3Attributes, ContentH3Frontend };

const { __ } = wp.i18n;
const { Component} = wp.element;
const { PlainText } = wp.editor;

export default class ContentH3 extends Component {
	onChangeContentH3 = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			contentH3: value
		} );
	};

	render() {
		if ( ! this.props.attributes.contentDisplayHeadline ) {
			return null;
		}

		return (
			<div class="col">
				<h3>
					<PlainText
						keepPlaceholderOnFocus = { true }
						onChange = { this.onChangeContentH3 }
						placeholder = { 'Et dolore magna aliqua' }
						value = { this.props.attributes.contentH3 }
					/>
				</h3>
			</div>
		);
	}
}
