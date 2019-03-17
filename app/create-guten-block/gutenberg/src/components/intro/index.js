const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PlainText } = wp.editor;

import classnames from 'classnames';
import { IntroAttributes } from './attributes';
import { IntroFrontend } from './frontend';
import ContentH2Editor from '../../elements/content-h2/';
import ContentParagraphEditor from '../../elements/content-paragraph/';
import ContentLinkEditor from '../../elements/content-link/';

export { IntroAttributes, IntroFrontend };

export default class IntroEditor extends Component {
	render() {
		if ( ! this.props.attributes.displayIntro ) {
			return null;
		}

		return (
			<Fragment>
				<div class='col'>
					{ this.props.attributes.introDisplayHeadline && (
						<ContentH2Editor { ...this.props } />
					) }
				</div>
				<div class='col'>
					{ this.props.attributes.introDisplayParagraph && (
						<ContentParagraphEditor { ...this.props } />
					) }
					{ this.props.attributes.introDisplayLink && (
						<ContentLinkEditor { ...this.props } />
					) }
				</div>
			</Fragment>
		);
	}
}
