export const MediaItemAttributes = {
	mediaItemID: {
		type: 'number',
	},
	mediaItemAlt: {
		attribute: 'alt',
		selector: '.media-item img',
		source: 'attribute',
		type: 'string'
	},
	mediaItemURL: {
		attribute: 'src',
		selector: '.media-item img',
		source: 'attribute',
		type: 'string',
	}
};
