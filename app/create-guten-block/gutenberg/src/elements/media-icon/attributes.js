export const MediaIconAttributes = {
	mediaIconID: {
		type: 'number',
	},
	mediaIconAlt: {
		attribute: 'alt',
		selector: '.media-icon img',
		source: 'attribute',
		type: 'string'
	},
	mediaIconURL: {
		attribute: 'src',
		selector: '.media-icon img',
		source: 'attribute',
		type: 'string',
	}
};
