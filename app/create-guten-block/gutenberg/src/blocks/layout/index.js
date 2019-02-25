/** BLOCK: Layout **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import LayoutInspector, { LayoutInspectorAttributes } from '../../components/layout/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';

export default registerBlockType( 'frontendberg/layout', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Layout',
	attributes: {
		...LayoutInspectorAttributes,
		...SuperscriptAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<LayoutInspector { ...props } />
				</InspectorControls>
			),
			<section>
				<SuperscriptEditor { ...props } />
			</section>,
		];
	},

	save: props => {
		return (
			<section>
				<SuperscriptFrontend { ...props } />
			</section>
		);
	}
});
