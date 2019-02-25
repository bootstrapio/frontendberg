const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';
import { SuperscriptAttributes } from './attributes';
import { SuperscriptFrontend } from './frontend';
import ContentH5Editor from '../../elements/content-h5/';

export { SuperscriptAttributes, SuperscriptFrontend };

export default class SuperscriptEditor extends Component {
	render() {
		if ( ! this.props.attributes.displaySuperscript ) {
			return null;
		}

		return (
			<div class='col superscript'>
				{ this.props.attributes.superscriptDisplayTitle && (
					<ContentH5Editor { ...this.props } />
				) }
			</div>
		);
	}
}
