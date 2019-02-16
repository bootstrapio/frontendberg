/** BLOCK: Layout One **/

/** External dependencies **/
import classnames from 'classnames';

/** WordPress dependencies ()*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, RichText } = wp.editor;

/** Internal dependencies **/
import LayoutInspector, { LayoutInspectorAttributes, LayoutInspectorClasses } from '../../components/layout-inspector';
import Superscript, { SuperscriptAttributes, SuperscriptClasses, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes, SuperscriptInspectorClasses } from '../../components/superscript-inspector';
import Content, { ContentAttributes, ContentClasses, ContentFrontend } from '../../components/content';
import ContentInspector, { ContentInspectorAttributes, ContentInspectorClasses } from '../../components/content-inspector';

/** Register Block Type **/
export default registerBlockType( 'frontendberg/layout-one', {
	title: 'Layout One',
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
				</InspectorControls>
			),

			<div class='container layout-one'>
				<div class='row group-content'>
					{( props.attributes.displaySuperscript === false ? '' :
						<Superscript { ...props } />
					)}
					{( props.attributes.displayContent === false ? '' :
						<Content { ...props } />
					)}
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
						<ContentFrontend { ...props } />
					)}
				</div>
			</div>
		);
	}
} );
