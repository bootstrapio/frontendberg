/** BLOCK: Layout **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, RichText } = wp.editor;

import classnames from 'classnames';
import ContentH5Editor, { ContentH5Attributes, ContentH5Frontend } from '../../elements/content-h5';

export default registerBlockType( 'frontendberg/layout', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Layout',
	attributes: {
		...ContentH5Attributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
				</InspectorControls>
			),
			<section>
				<ContentH5Editor { ...props } />
			</section>,
		];
	},

	save: props => {
		return (
			<section>
				<ContentH5Frontend { ...props } />
			</section>
		);
	}
});
