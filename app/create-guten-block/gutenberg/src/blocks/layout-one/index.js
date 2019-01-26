/** BLOCK: Layout One **/

/** External dependencies **/
// Import NPM libraries here.
import classnames from 'classnames';

/** WordPress dependencies ()*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, RichText } = wp.editor;

/** Internal dependencies **/
import Superscript, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes, SuperscriptInspectorClasses } from '../../components/superscript-inspector';

/** Register Block Type **/
export default registerBlockType( 'frontendberg/layout-one', { // Namespaced with 'wds/', lowercase, hyphenated.
	title: 'Layout One',
	category: 'frontendberg-layouts',
	icon: 'sos',
	attributes: {
		message: {
			type: 'array',
			source: 'children',
			selector: '.content-block',
		},
		...SuperscriptAttributes,
		...SuperscriptInspectorAttributes,
	},

	// Displays | Gutenberg Editor
	edit: props => {
		// Event handler to update the value of the content when changed in editor.
		const setMessageAttribute = value => {
			props.setAttributes( { message: value } );
		};

		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					{ SuperscriptInspector( props ) }
				</InspectorControls>
			),

			<div className ='layout-one'>
				<div className ='container'>
				{(
					props.attributes.superscriptDisplay === false ? '' :
					<div className = 'row'>
						<div className = 'col-12'>
							<Superscript { ...props } />
						</div>
					</div>
				)}
				</div>
			</div>
		];
	},

	// Displays | Frontend
	save: props => {
		return (
			<div className ='layout-one'>
				<div className ='container'>
				{(
					props.attributes.superscriptDisplay === false ? '' :
					<div className = 'row'>
						<div className = 'col-12'>
							<SuperscriptFrontend { ...props } />
						</div>
					</div>
				)}
				</div>
			</div>
		);
	}
} );
