import classnames from 'classnames';
import { ContentAttributes } from './attributes';
import { ContentFrontend } from './frontend';

export { ContentAttributes, ContentFrontend };

const { __ } = wp.i18n;
const { Component, Fragment} = wp.element;
const { PlainText, RichText } = wp.editor;

export default class Content extends Component {
	onChangeContentParagraph = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			contentParagraph: value
		} );
	};

	onChangeContentLink = value => {
		const { setAttributes } = this.props;
		setAttributes( {
			contentLink: value
		} );
	};

	render() {
		if ( ! this.props.attributes.contentDisplayParagraph && ! this.props.attributes.contentDisplayLink ) {
			return null;
		}

		return (
      <Fragment>
        <div class='col'>
    			{ this.props.attributes.contentDisplayParagraph && (
            <RichText
              // className = 'content'
              tagName = 'p'
              keepPlaceholderOnFocus = { true }
              placeholder = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
              onChange = { this.onChangeContentParagraph }
              value = { this.props.attributes.contentParagraph }
            />
          ) }
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
        </div>
      </Fragment>
		);
	}
}
