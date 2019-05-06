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
import MediaEditor, { MediaAttributes, MediaFrontend } from '../../components/media';
import MediaInspector, { MediaInspectorAttributes } from '../../components/media/inspector';

export default registerBlockType( 'frontendberg/banner', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Banner',
	attributes: {
		...SuperscriptAttributes, ...SuperscriptInspectorAttributes,
		...ContentAttributes, ...ContentInspectorAttributes,
		...MediaAttributes, ...MediaInspectorAttributes,
		...BannerInspectorAttributes,
	},

	edit: props => {
		return [
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<BannerInspector { ...props } />
					{ ( 'layout-three' == props.attributes.layoutStyle ) && ( <MediaInspector { ...props } />)}
				</InspectorControls>
			),
			<section>
				<div
					className={ 'container ' + classnames(
						props.className,
						...BannerStyleClasses( props ),
					)}
				>
					<div class="row">
						<div class="col">
							<div class="row group-content">
								<SuperscriptEditor { ...props } />
								<ContentEditor { ...props } />
							</div>
						</div>

						{ classnames(...BannerStyleClasses( props )) == 'banner-preview' && (
							<div class="col">
								<div class="row group-media">
									<div class="col">
										<MediaEditor { ...props } />
									</div>
								</div>
							</div>
						)}
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
					<div class="row">
						<div class="col">
							<div class="row group-content">
								<SuperscriptFrontend { ...props } />
								<ContentFrontend { ...props } />
							</div>
						</div>
							{ classnames(...BannerStyleClasses( props )) == 'banner-preview' && (
								<div class="col">
									<div class="row group-media">
										<div class="col">
											<MediaFrontend { ...props } />
										</div>
									</div>
								</div>
							)}
					</div>
				</div>
			</section>
		);
	}
});
