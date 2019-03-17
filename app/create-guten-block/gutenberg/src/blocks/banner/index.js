/** BLOCK: Banner **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import BannerEditor, { BannerStyleClasses } from '../../components/banner/';
import BannerInspector, { BannerInspectorAttributes } from '../../components/banner/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes } from '../../components/superscript/inspector';
import ContentEditor, { ContentAttributes, ContentFrontend } from '../../components/content';
import ContentInspector, { ContentInspectorAttributes } from '../../components/content/inspector';

export default registerBlockType( 'frontendberg/banner', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Banner',
	attributes: {
		...SuperscriptAttributes, ...SuperscriptInspectorAttributes,
		...ContentAttributes, ...ContentInspectorAttributes,
		...BannerInspectorAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<BannerInspector { ...props } />
					<ContentInspector { ...props } />
				</InspectorControls>
			),
			<section>
				<div
					className={ 'container ' + classnames(
						props.className,
						...BannerStyleClasses( props ),
					)}
				>
					<div class="row group-content">
						<SuperscriptEditor { ...props } />
						<ContentEditor { ...props } />
					</div>
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
						...BannerStyleClasses( props ),
					)}
				>
					<div class="row group-content">
						<SuperscriptFrontend { ...props } />
						<ContentFrontend { ...props } />
					</div>
				</div>
			</section>
		);
	}
});
