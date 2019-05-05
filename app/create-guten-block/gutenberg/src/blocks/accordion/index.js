/** BLOCK: Accordion **/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { PlainText, RichText } = wp.editor;

//  Import CSS.
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
	arrayMove,
} from 'react-sortable-hoc';
import Inspector from './components/inspector';

export default  registerBlockType( 'frontendberg/accordion', {
	category: 'frontendberg-layouts',
	description: '',
	icon: 'sos',
	keywords: [ 'Options' ],
	title: 'Accordion',
	attributes: {
		id: {
			type: 'number',
			default: -1,
		},
		activeControl: {
			type: 'string',
		},
		activeTab: {
			type: 'number',
			default: 0,
		},
		timestamp: {
			type: 'number',
			default: 0,
		},
		theme: {
			type: 'string',
			default: '#eeeeee',
		},
		titleColor: {
			type: 'string',
			default: '#000000'
		},
		tabsContent: {
			source: 'query',
			selector: '.wp-block-ub-tabbed-content-tab-content-wrap',
			query: {
				content: {
					type: 'array',
					source: 'children',
					selector: '.wp-block-ub-tabbed-content-tab-content',
				},
			},
		},
		tabsTitle: {
			source: 'query',
			selector: '.wp-block-ub-tabbed-content-tab-title-wrap',
			query: {
				content: {
					type: 'array',
					source: 'children',
					selector: '.wp-block-ub-tabbed-content-tab-title',
				},
			},
		},
	},

	edit: function( props ) {
		window.ubTabbedContentBlocks = window.ubTabbedContentBlocks || [];

		let block = null;

		for ( const bl of window.ubTabbedContentBlocks ) {
			if ( bl.id === props.attributes.id ) {
				block = bl;
				break;
			}
		}

		if ( ! block ) {
			block = {
				id: window.ubTabbedContentBlocks.length,
				SortableItem: null,
				SortableList: null,
			};
			window.ubTabbedContentBlocks.push( block );
			props.setAttributes( { id: block.id } );
		}

		const { className, setAttributes, attributes, isSelected } = props;

		if ( ! attributes.tabsContent ) {
			attributes.tabsContent = [];
		}

		if ( ! attributes.tabsTitle ) {
			attributes.tabsTitle = [];
		}

		const updateTimeStamp = () => {
			setAttributes( { timestamp: ( new Date() ).getTime() } );
		};

		const showControls = ( type, index ) => {
			console.log('show controls')
			setAttributes( { activeControl: type + '-' + index } );
			setAttributes( { activeTab: index } );
		};

		const onChangeTabContent = ( content, i ) => {
			attributes.tabsContent[ i ].content = content;

			updateTimeStamp();
		};

		const onChangeTabTitle = ( content, i ) => {
			attributes.tabsTitle[ i ].content = content;

			updateTimeStamp();
		};

		const addTab = ( i ) => {
			attributes.tabsTitle[ i ] = { content: 'Nemo' };
			setAttributes( { tabsTitle: attributes.tabsTitle } );

			attributes.tabsContent[ i ] = { content: '' };
			setAttributes( { tabsContent: attributes.tabsContent } );

			setAttributes( { activeTab: i } );

			showControls( 'tab-title', i );

			updateTimeStamp();
		};

		const removeTab = ( i ) => {
			const tabsTitleClone = attributes.tabsTitle.slice( 0 );
			tabsTitleClone.splice( i, 1 );
			setAttributes( { tabsTitle: tabsTitleClone } );

			const tabsContentClone = attributes.tabsContent.slice( 0 );
			tabsContentClone.splice( i, 1 );
			setAttributes( { tabsContent: tabsContentClone } );

			setAttributes( { activeTab: 0 } );
			showControls( 'tab-title', 0 );

			updateTimeStamp();
		};

		const onThemeChange = ( value ) => setAttributes( { theme: value } );
		const onTitleColorChange = ( value ) => setAttributes( { titleColor: value } );

		if ( attributes.tabsContent.length === 0 ) {
			addTab( 0 );
		}

		const onSortEnd = ( { oldIndex, newIndex } ) => {
			const titleItems = attributes.tabsTitle.slice( 0 );

			setAttributes( { tabsTitle: arrayMove( titleItems, oldIndex, newIndex ) } );

			const contentItems = attributes.tabsContent.slice( 0 );

			setAttributes( { tabsContent: arrayMove( contentItems, oldIndex, newIndex ) } );

			setAttributes( { activeTab: newIndex } );

			showControls( 'tab-title', newIndex );
		};

		const DragHandle = SortableHandle( () => <span className="dashicons dashicons-move drag-handle"></span> );

		if ( ! block.SortableItem ) {
			block.SortableItem = SortableElement( ( { value, i, propz, onChangeTitle, onRemoveTitle, toggleTitle } ) => {
				return (
					<li className={ propz.className + '-tab-title-wrap nav-item SortableItem'} onClick={ () => toggleTitle( 'tab-title', i ) }>
						<a
							aria-controls='contact' aria-selected='false' data-toggle='tab' role='tab'
							className={ propz.className + '-tab-title nav-link' + ( propz.attributes.activeTab === i ? ' active' : '' ) }
							href = { '#tab-title-' + i }
							id = { 'tab-title-' + i }
							// style = { { backgroundColor: propz.attributes.activeTab === i ? propz.attributes.theme : 'initial', color: propz.attributes.activeTab === i ? propz.attributes.titleColor: '#000000' } }
						>
							<PlainText
								isSelected={ propz.attributes.activeControl === 'tab-title-' + i && propz.isSelected }
								onChange={ ( content ) => onChangeTitle( content, i ) }
								keepPlaceholderOnFocus = { true }
								placeholder = 'Nemo'
								value={ value.content }
							/>
						</a>
							<DragHandle />
							<span className={ 'dashicons dashicons-minus remove-tab-icon' + ( propz.attributes.tabsTitle.length === 1 ? ' ub-hide' : '' ) } onClick={ () => onRemoveTitle(i) }></span>
					</li>
				);
			});
		}

		if ( ! block.SortableList ) {
			block.SortableList = SortableContainer( ( { items, propz, onChangeTitle, onRemoveTitle, toggleTitle, onAddTab } ) => {
				return (
					<ul className={ className + '-tabs-title nav nav-tabs SortableList' } role='tablist'>
						{ items.map( ( value, index ) => {
							return <block.SortableItem propz={ propz } key={ `item-${ index }` } i={ index } index={ index } value={ value } onChangeTitle={ onChangeTitle } onRemoveTitle={ onRemoveTitle } toggleTitle={ toggleTitle } />;
						} ) }
						<li className={ className + '-tab-title-wrap nav-item' } key={ propz.attributes.tabsTitle.length } onClick={ () => onAddTab( propz.attributes.tabsTitle.length ) } >
							<span className="dashicons dashicons-plus-alt"></span>
						</li>
					</ul>
				);
			} );
		}

		return [
			isSelected && (
				<Inspector { ...{ attributes, onThemeChange, onTitleColorChange } } key="inspector" />
			),
			<div className={ className + '-holder components-tabbed-horizontal' }>
					{
						<block.SortableList axis="x" propz={ props } items={ attributes.tabsTitle } onSortEnd={ onSortEnd } useDragHandle={ true } onChangeTitle={ onChangeTabTitle } onRemoveTitle={ removeTab } toggleTitle={ showControls } onAddTab={ addTab } />
					}
					<div className={ className + '-tabs-content tab-content' }>
						{
							attributes.tabsContent.map( ( tabContent, i ) => {
								return <div className={ className + '-tab-content-wrap tab-pane fade' + ( attributes.activeTab === i ? ' show active' : ' ub-hide' ) } key={ i }>
									<RichText
										tagName="div"
										className={ className + '-tab-content' }
										value={ tabContent.content }
										formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
										isSelected={ attributes.activeControl === 'tab-content-' + i && isSelected }
										onClick={ () => showControls( 'tab-content', i ) }
										onChange={ ( content ) => onChangeTabContent( content, i ) }
										placeholder="Enter the Tab Content here..."
									/>
								</div>;
							} )
						}
					</div>
				</div>,
		];
	},

	save: function( props ) {
		const className = 'wp-block-ub-tabbed-content';

		const { activeTab, theme, titleColor } = props.attributes;

		return <div data-id={ props.attributes.id } className={ className + '-holder components-tabbed-horizontal' }>
				<ul className={ className + '-tabs-title nav nav-tabs' } role='tablist'>
					{
						props.attributes.tabsTitle.map( ( value, i ) => {
							return <div
								className={ className + '-tab-title-wrap' + ( activeTab === i ? ' active' : '' ) }
								key={ i }
								// style={ { backgroundColor: activeTab === i ? theme : 'initial', borderColor: activeTab === i ? theme : 'lightgrey', color: activeTab === i ? titleColor: '#000000' } }
								>
								<div className={ className + '-tab-title' }>
									{ value.content }
								</div>
							</div>;
						} )
					}
				</ul>
				<div className={ className + '-tabs-content tab-content' }>
					{
						props.attributes.tabsContent.map( ( value, i ) => {
							return <div className={ className + '-tab-content-wrap tab-pane fade' + ( activeTab === i ? ' show active' : ' ub-hide' ) } key={ i }>
								<div className={ className + '-tab-content' }>
									{ value.content }
								</div>
							</div>;
						} )
					}
				</div>
			</div>;
	},
} );
