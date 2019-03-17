/** BLOCK: Intro **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import IntroEditor, { IntroStyleClasses } from '../../components/intro/';
import IntroInspector, { IntroInspectorAttributes } from '../../components/intro/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes } from '../../components/superscript/inspector';
import ContentEditor, { ContentAttributes, ContentFrontend } from '../../components/content';
import ContentInspector, { ContentInspectorAttributes } from '../../components/content/inspector';

export default registerBlockType( 'frontendberg/intro', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Intro',
	attributes: {
		...SuperscriptAttributes, ...SuperscriptInspectorAttributes,
		...ContentAttributes, ...ContentInspectorAttributes,
		...IntroInspectorAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<IntroInspector { ...props } />
					<SuperscriptInspector { ...props } />
					<ContentInspector { ...props } />
				</InspectorControls>
			),
			<section>
				<div
					className={ 'container ' + classnames(
						props.className,
						...IntroStyleClasses( props ),
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
						...IntroStyleClasses( props ),
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
