/** BLOCK: Layout **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import LayoutInspector, { LayoutInspectorAttributes } from '../../components/layout/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes } from '../../components/superscript/inspector';
import ContentEditor, { ContentAttributes, ContentFrontend } from '../../components/content';
import ContentInspector, { ContentInspectorAttributes } from '../../components/content/inspector';
import MediaInspector, { MediaInspectorAttributes } from '../../components/media/inspector';

export default registerBlockType( 'frontendberg/layout', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Layout',
	attributes: {
		...LayoutInspectorAttributes,
		...SuperscriptAttributes, ...SuperscriptInspectorAttributes,
		...ContentAttributes, ...ContentInspectorAttributes,
		...MediaInspectorAttributes,
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
				<div className={ 'container ' + ( props.attributes.layoutStyle ) }>
					<div class="row group-content">
						<SuperscriptEditor { ...props } />
						<ContentEditor { ...props } />
					</div>
					{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<div class="col">
							<p>{ props.attributes.mediaType }</p>
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
				<div className={ 'container ' + ( props.attributes.layoutStyle ) }>
					<div class="row group-content">
						<SuperscriptFrontend { ...props } />
						<ContentFrontend { ...props } />
					</div>
					{( props.attributes.displayMedia === false ? '' :
					<div class="row group-media">
						<div class="col">
							<p>{ props.attributes.mediaType }</p>
						</div>
					</div>
					)}
				</div>
			</section>
		);
	}
});
