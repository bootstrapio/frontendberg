/** BLOCK: Layout One **/

/** External dependencies **/
import classnames from 'classnames';

/** WordPress dependencies ()*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment} = wp.element;
const { InspectorControls, MediaUpload, RichText } = wp.editor;

/** Internal dependencies **/
import LayoutInspector, { LayoutInspectorAttributes, LayoutInspectorClasses } from '../../components/layout-inspector';
import Superscript, { SuperscriptAttributes, SuperscriptClasses, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes, SuperscriptInspectorClasses } from '../../components/superscript-inspector';
import Content, { ContentAttributes, ContentClasses, ContentFrontend } from '../../components/content';
import ContentH3, { ContentH3Attributes, ContentH3Classes, ContentH3Frontend } from '../../components/content-h3';
import ContentInspector, { ContentInspectorAttributes, ContentInspectorClasses } from '../../components/content-inspector';
import Media, { MediaAttributes, MediaClasses, MediaFrontend } from '../../components/media';
import MediaInspector, { MediaInspectorAttributes, MediaInspectorClasses } from '../../components/media-inspector';

/** Register Block Type **/
export default registerBlockType( 'frontendberg/layout', {
	title: 'Layout',
	category: 'frontendberg-layouts',
	icon: 'sos',
	attributes: {
		message: {
			type: 'array',
			source: 'children',
			selector: '.content-block',
		},
		...LayoutInspectorAttributes,
		...SuperscriptInspectorAttributes,
		...ContentInspectorAttributes,
		...MediaInspectorAttributes,
	},

	// Gutenberg
	edit: props => {
		// Event handler to update the value of the content when changed in editor.
		const setMessageAttribute = value => {
			props.setAttributes( { message: value } );
		};

		return [
			!! props.isSelected && (
				<InspectorControls key='inspector'>
					{ LayoutInspector( props ) }
					{ SuperscriptInspector( props ) }
					{ ContentInspector( props ) }
					{ MediaInspector( props ) }
				</InspectorControls>
			),
<div class="bd-example-row">
<div class="bd-example">
			<div class='container layout-one'>
				<div class='row group-content'>
					{( props.attributes.displaySuperscript === false ? '' :
						<Superscript { ...props } />
					)}
					{( props.attributes.displayContent === false ? '' :
						<Fragment>
							<ContentH3 { ...props } />
							<Content { ...props } />
						</Fragment>
					)}
				</div>
				{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<Media { ...props } />
					</div>
				)}
			</div>
</div>
</div>
		];
	},

	// Frontend
	save: props => {
		return (
			<div class='container layout-one'>
				<div class='row group-content'>
					{( props.attributes.displaySuperscript === false ? '' :
						<SuperscriptFrontend { ...props } />
					)}
					{( props.attributes.displayContent === false ? '' :
						<Fragment>
							<ContentH3Frontend { ...props } />
							<ContentFrontend { ...props } />
						</Fragment>
					)}
				</div>
				{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<MediaFrontend { ...props } />
					</div>
				)}
			</div>
		);
	}
} );
