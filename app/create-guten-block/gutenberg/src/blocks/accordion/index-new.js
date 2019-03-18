/** BLOCK: Accordion **/

/** External dependencies | Import NPM libraries here. **/
import classnames from 'classnames';

/** WordPress dependencies **/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { Component, Fragment } = wp.element;

/** Internal dependencies **/
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';

/** Register block **/
export default registerBlockType( 'frontendberg/accordion', { // Namespaced with 'wds/', lowercase, hyphenated.
	// Localize title using wp.i18n.__()
	title: __( 'Accordion' ),
	description: __( 'Optional description.' ),
	category: 'frontendberg-layouts',
	icon: 'sos',
	attributes: {
		id: {
			type: 'number',
			default: -1,
		},
		activeControl: {
			type: 'string',
		},
		activeAccordion: {
			type: 'number',
			default: 0,
		},
		timestamp: {
			type: 'number',
			default: 0,
		},
		accordionContent: {
			source: 'query',
			selector: '.tab-pane',
			query: {
				content: {
					type: 'array',
					source: 'children',
					selector: '.pane-content',
				},
			},
		},
		accordionTitle: {
			source: 'query',
			selector: '.card',
			query: {
				title: {
					type: 'array',
					source: 'children',
					selector: '.nav-link',
				},
				content: {
					selector: '.card-body p',
					source: 'children',
					type: 'array'
				}
			},
		},
	},

	// Determines what is displayed in the editor.
	edit: function( props ) {
		window.accordionComponent = window.accordionComponent || [];

		let block = null;

		for ( const bl of window.accordionComponent ) {
			if ( bl.id === props.attributes.id ) {
				block = bl;
				break;
			}
		}

		if ( ! block ) {
			block = {
				id: window.accordionComponent.length,
				SortableItem: null,
				SortableList: null,
			};
			window.accordionComponent.push( block );
			props.setAttributes( { id: block.id } );
		}

		const { className, setAttributes, attributes, isSelected } = props;

		if ( ! attributes.accordionContent ) {
			attributes.accordionContent = [];
		}

		if ( ! attributes.accordionTitle ) {
			attributes.accordionTitle = [];
		}

		if ( ! attributes.accordionTitleContent ) {
			attributes.accordionTitleContent = [];
		}

		const updateTimeStamp = () => {
			setAttributes( { timestamp: ( new Date() ).getTime() } );
		};

		const onChangeAccordionTitle = ( value, i ) => {
			attributes.accordionTitle[ i ].title = value;
			updateTimeStamp();
		};

		const onChangeAccordionTitleContent = ( value, i ) => {
			attributes.accordionTitle[ i ].content = value;
			updateTimeStamp();
		};

		const onChangeAccordionContent = ( content, i ) => {
			attributes.accordionContent[ i ].content = content;
			updateTimeStamp();
		};

		const showControls = ( type, index ) => {
			console.log('show controls')
			setAttributes( { activeControl: type + '-' + index } );
			setAttributes( { activeAccordion: index } );
		};

		const addAccordion = ( i ) => {
			// CHECK THIS //
			attributes.accordionTitle[ i ] = { value: '' };
			setAttributes( { accordionTitle: attributes.accordionTitle } );

			attributes.accordionTitleContent[ i ] = { value: '' };
			setAttributes( { accordionTitleContent: attributes.accordionTitleContent } );
			// CHECK THIS //

			attributes.accordionContent[ i ] = { content: '' };
			setAttributes( { accordionContent: attributes.accordionContent } );

			setAttributes( { activeAccordion: i } );
			showControls( 'accordion-title', i );
			updateTimeStamp();
		};

		const removeAccordion = ( i ) => {
			const accordionTitleClone = attributes.accordionTitle.slice( 0 );
			accordionTitleClone.splice( i, 1 );
			setAttributes( { accordionTitle: accordionTitleClone } );

			const accordionTitleContentClone = attributes.accordionTitle.slice( 0 );
			accordionTitleContentClone.splice( i, 1 );
			setAttributes( { accordionTitle: accordionTitleContentClone } );

			const accordionContentClone = attributes.accordionContent.slice( 0 );
			accordionContentClone.splice( i, 1 );
			setAttributes( { accordionContent: accordionContentClone } );

			setAttributes( { activeAccordion: 0 } );
			showControls( 'accordion-title', 0 );
			updateTimeStamp();
		};

		if ( attributes.accordionContent.length === 0 ) {
			addAccordion( 0 );
		}

		const onSortEnd = ( { oldIndex, newIndex } ) => {
			const accordionTitleItems = attributes.accordionTitle.slice( 0 );
			setAttributes( { accordionTitle: arrayMove( accordionTitleItems, oldIndex, newIndex ) } );

			const accordionTitleContentItems = attributes.accordionTitleContent.slice( 0 );
			setAttributes( { accordionTitleContent: arrayMove( accordionTitleContentItems, oldIndex, newIndex ) } );

			const accordionContentItems = attributes.accordionContent.slice( 0 );
			setAttributes( { accordionContent: arrayMove( accordionContentItems, oldIndex, newIndex ) } );

			setAttributes( { activeAccordion: newIndex } );
			showControls( 'accordion-title', newIndex );
		};

		const DragHandle = SortableHandle( () => <span className="drag"><i class="fas fa-arrows-alt-v"></i></span> );

		if ( ! block.SortableItem ) {
			block.SortableItem = SortableElement( ( { value, i, propz, onChangeTitle, onChangeTitleContent, onRemoveTitle, toggleTitle } ) => {
				return (
					<div className={ 'card SortableItem' } onClick={ () => toggleTitle( 'accordion-title', i ) }>
						<div className={ 'nav-item' }>
								<a className={ 'nav-link' + ( propz.attributes.activeAccordion === i ? ' active' : ' collapsed' ) } data-toggle="collapse" aria-expanded={ ( propz.attributes.activeAccordion === i ? 'true' : ' false' ) }>
									<div className={'gutenberg-update-item d-flex justify-content-between align-items-center'}>
										<DragHandle />
										<span className={ 'remove' + ( propz.attributes.accordionTitle.length === 1 ? ' hidden' : '' ) } onClick={ () => onRemoveTitle(i) }>
											<i className="fas fa-minus-circle"></i>
										</span>
									</div>
									<RichText
										placeholder= 'Nemo'
										keepPlaceholderOnFocus = { true }
										value={ value.title }
										isSelected={ propz.attributes.activeControl === 'accordion-title-' + i && propz.isSelected }
										onChange={ ( value ) => onChangeTitle( value, i ) }
									/>
								</a>
						</div>

						<div className={'collapse' + ( propz.attributes.activeAccordion === i ? ' show' : '' )}>
							<div className={'card-body'}>
								<RichText
									tagName = 'p'
									placeholder= 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
									keepPlaceholderOnFocus = { true }
									value={ value.content }
									isSelected={ propz.attributes.activeControl === 'accordion-title-' + i && propz.isSelected }
									onChange={ ( value ) => onChangeTitleContent( value, i ) }
								/>
							</div>
						</div>
					</div>
				);
			});
		}

		if ( ! block.SortableList ) {
			block.SortableList = SortableContainer( ( { items, propz, onChangeTitle, onChangeTitleContent, onRemoveTitle, toggleTitle, onAddAccordion } ) => {
				return (
					<div className = { 'accordion SortableList' }>
						{ items.map( ( value, index ) => {
							return <block.SortableItem propz={ propz } key={ `item-${ index }` } i={ index } index={ index } value={ value } onChangeTitle={ onChangeTitle } onChangeTitleContent={ onChangeTitleContent } onRemoveTitle={ onRemoveTitle } toggleTitle={ toggleTitle } />;
						} ) }
						<div className={ 'card' }>
							<div className={ 'nav-item' } key={ propz.attributes.accordionTitle.length } onClick={ () => onAddAccordion( propz.attributes.accordionTitle.length ) } >
									<a className={'nav-link collapsed'} data-toggle="collapse" aria-expanded="false">
										<div className={'gutenberg-update-item d-flex justify-content-center align-items-center'}>
											<span className="add"><i className="fas fa-plus-circle"></i></span>
										</div>
									</a>
							</div>
						</div>
					</div>
				);
			} );
		}

		return [
		<section className={ 'section-components' }>
			<div className = { 'component-accordion container' }>
				<div className={ 'row' }>
					<div className={ 'col-12' }>
						{
							<block.SortableList
								axis="y"
								propz={ props }
								items={ attributes.accordionTitle }
								onSortEnd={ onSortEnd }
								useDragHandle={ true }
								onChangeTitle={ onChangeAccordionTitle }
								onChangeTitleContent={ onChangeAccordionTitleContent }
								onRemoveTitle={ removeAccordion }
								toggleTitle={ showControls }
								onAddAccordion={ addAccordion }
							/>
						}
						<div class="hidden">
							<div className={ 'tab-content' }>
								{
									attributes.accordionContent.map( ( accordionContent, i ) => {
										return <div className={ 'tab-pane fade' + ( attributes.activeAccordion === i ? ' show active' : ' hidden' ) } key={ i }>
											<RichText
												tagName = 'p'
												keepPlaceholderOnFocus = { true }
												placeholder = ''
												className={ 'pane-content' }
												value={ accordionContent.content }
												formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
												isSelected={ attributes.activeControl === 'tab-content-' + i && isSelected }
												onClick={ () => showControls( 'tab-content', i ) }
												onChange={ ( content ) => onChangeAccordionContent( content, i ) }
											/>
										</div>;
									} )
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		];
	},

	save: function( props ) {
		const { activeAccordion } = props.attributes;
		return (
			<section className={ 'section-components' }>
				<div className = { 'component-accordion container' }>
					<div className={ 'row' }>
						<div data-id={ props.attributes.id } id={ 'accordion-' + props.attributes.id } className={ 'col-12' }>
							{
								props.attributes.accordionTitle.map( ( value, i ) => {
									return <div className={ 'card' }>
										<div className={ 'nav-item' } key={ i } id={ 'heading-' + i }>
												<a className={ 'nav-link' + ( activeAccordion === i ? '' : ' collapsed' ) } data-toggle="collapse" data-target={ '#collapse-' + i } aria-expanded={ ( activeAccordion === i ? 'true' : ' false' ) } aria-controls={ 'collapse-' + i }>
													{ value.title }
												</a>
										</div>
										<div id={ 'collapse-' + i } className={ 'collapse' + ( activeAccordion === i ? ' show' : '' ) } aria-labelledby={ 'heading-' + i } data-parent={ '#accordion-' + props.attributes.id }>
				      				<div class="card-body">
												<p>{ value.content }</p>
											</div>
				    				</div>
									</div>;
								} )
							}
							<div className={ 'hidden' }>
								<div className={ 'tab-content' }>
									{
										props.attributes.accordionContent.map( ( value, i ) => {
											return <div className={ 'tab-pane fade' + ( activeAccordion === i ? ' show active' : ' hidden' ) } key={ i }  role="tabpanel" id={ 'tab-' + i }>
												<p className={ 'pane-content' }>
													{ value.content }
												</p>
											</div>;
										} )
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
