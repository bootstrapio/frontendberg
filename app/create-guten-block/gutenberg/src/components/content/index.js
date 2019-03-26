const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';
import { ContentAttributes } from './attributes';
import { ContentFrontend } from './frontend';
import ContentH2Editor from '../../elements/content-h2/';
import ContentH3Editor from '../../elements/content-h3/';
import ContentParagraphEditor from '../../elements/content-paragraph/';
import ContentLinkEditor from '../../elements/content-link/';

export { ContentAttributes, ContentFrontend };

export default class ContentEditor extends Component {
	render() {
		if ( ! this.props.attributes.displayContent ) {
			return null;
		}

		return (
			<Fragment>
				<div class='col'>
					{ this.props.attributes.contentDisplayH2 && ( <ContentH2Editor { ...this.props } /> ) }
					{ this.props.attributes.contentDisplayH3 && ( <ContentH3Editor { ...this.props } /> ) }
				</div>
				<div class='col'>
					{ this.props.attributes.contentDisplayParagraph && ( <ContentParagraphEditor { ...this.props } /> ) }
					{ this.props.attributes.contentDisplayLink && ( <ContentLinkEditor { ...this.props } /> ) }
				</div>
			</Fragment>
		);
	}
}
