const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';
import { ContentAttributes } from './attributes';
import { ContentFrontend } from './frontend';
import ContentH3Editor from '../../elements/content-h3/';

export { ContentAttributes, ContentFrontend };

export default class ContentEditor extends Component {
	render() {
		if ( ! this.props.attributes.displayContent ) {
			return null;
		}

		return (
			<div class='col'>
				{ this.props.attributes.contentDisplayHeadline && (
					<ContentH3Editor { ...this.props } />
				) }
			</div>
		);
	}
}
