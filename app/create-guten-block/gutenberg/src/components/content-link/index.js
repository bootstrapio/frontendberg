import classnames from 'classnames';
import { ContentLinkAttributes } from './attributes';
import { ContentLinkFrontend } from './frontend';

export { ContentLinkAttributes, ContentLinkFrontend };

const { __ } = wp.i18n;
const { Component, Fragment} = wp.element;
const { RichText } = wp.editor;

export default class ContentLink extends Component {
	onChangeContentLink = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			contentLink: value
		} );
	};

	render() {
		if ( ! this.props.attributes.contentDisplayLink ) {
			return null;
		}

		return (
      <Fragment>
  			{ this.props.attributes.contentDisplayLink && (
          <RichText
						className = { 'link' + ( this.props.attributes.contentLinkType == 'default' ? '' : ' ' + this.props.attributes.contentLinkType) }
						tagName = 'p'
						keepPlaceholderOnFocus = { true }
						formattingControls = { [ 'link' ] }
						placeholder = { 'Nemo enim ipsam' }
						onChange = { this.onChangeContentLink }
						value = { this.props.attributes.contentLink }
					/>
  			) }
      </Fragment>
		);
	}
}
