/** BLOCK: Layout **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

import classnames from 'classnames';
import LayoutInspector, { LayoutInspectorAttributes } from '../../components/layout/inspector';
import SuperscriptEditor, { SuperscriptAttributes, SuperscriptFrontend } from '../../components/superscript';
import SuperscriptInspector, { SuperscriptInspectorAttributes } from '../../components/superscript/inspector';

export default registerBlockType( 'frontendberg/layout', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Layout',
	attributes: {
		...LayoutInspectorAttributes,
		...SuperscriptAttributes,
		...SuperscriptInspectorAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<LayoutInspector { ...props } />
					<SuperscriptInspector { ...props } />
				</InspectorControls>
			),
			<section>
				<div class="container layout-one">
					<div class="row group-content">
						<SuperscriptEditor { ...props } />
						<div class="col">
							<h3>You have a great touch for making movies.</h3>
						</div>
						<div class="col">
								<p>iMovie is even easier to use with the new MacBook Pro, featuring the revolutionary Touch Bar. The most useful commands automatically appear on the keyboard, right where you need them. And MacBook Pro easily powers through demanding 4K video projects so you can edit and export in record time.</p>
								<a href="#" class="">Layout One</a>
						</div>
					</div>
					<div class="row group-media">
						<div class="col">
						</div>
					</div>
				</div>
			</section>,
		];
	},

	save: props => {
		return (
			<section>
				<div class="container layout-one">
					<div class="row group-content">
						<SuperscriptFrontend { ...props } />
						<div class="col">
							<h3>You have a great touch for making movies.</h3>
						</div>
						<div class="col">
								<p>iMovie is even easier to use with the new MacBook Pro, featuring the revolutionary Touch Bar. The most useful commands automatically appear on the keyboard, right where you need them. And MacBook Pro easily powers through demanding 4K video projects so you can edit and export in record time.</p>
								<a href="#" class="">Layout One</a>
						</div>
					</div>
					<div class="row group-media">
						<div class="col">
						</div>
					</div>
				</div>
			</section>
		);
	}
});
