/** BLOCK: Layout **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import LayoutEditor, { LayoutStyleClasses } from '../../components/layout/';
import LayoutInspector, { LayoutInspectorAttributes } from '../../components/layout/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes } from '../../components/superscript/inspector';
import ContentEditor, { ContentAttributes, ContentFrontend } from '../../components/content';
import ContentInspector, { ContentInspectorAttributes } from '../../components/content/inspector';
import MediaEditor, { MediaAttributes, MediaFrontend } from '../../components/media';
import MediaInspector, { MediaInspectorAttributes } from '../../components/media/inspector';

export default registerBlockType( 'frontendberg/layout', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Section',
	attributes: {
		...SuperscriptAttributes, ...SuperscriptInspectorAttributes,
		...ContentAttributes, ...ContentInspectorAttributes,
		...MediaAttributes, ...MediaInspectorAttributes,
		...LayoutInspectorAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<LayoutInspector { ...props } />
					<SuperscriptInspector { ...props } />
					<ContentInspector { ...props } />
					<MediaInspector { ...props } />
				</InspectorControls>
			),
			<section>
				<div
					className={ 'container ' + classnames(
						props.className,
						...LayoutStyleClasses( props ),
					)}
				>
					<div class="row group-content">
						<SuperscriptEditor { ...props } />
						<ContentEditor { ...props } />
					</div>
					{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<div class="col">
							<MediaEditor { ...props } />
						</div>
					</div>
					)}
				</div>
			</section>,
		];
	},

	save: props => {
		return (
			<section>
				<div
					className={ 'container ' + classnames(
						props.className,
						...LayoutStyleClasses( props ),
					)}
				>
					<div class="row group-content">
						<SuperscriptFrontend { ...props } />
						<ContentFrontend { ...props } />
					</div>
					{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<div class="col">
							<MediaFrontend { ...props } />
						</div>
					</div>
					)}
				</div>
			</section>
		);
	}
});
