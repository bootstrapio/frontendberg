function SuperscriptInspectorClasses( props ) {
	return [
		{ 'hidden' : false === props.attributes.superscriptDisplayIcon },
		{ 'hidden': false === props.attributes.superscriptDisplayTitle }
	];
}

export default SuperscriptInspectorClasses;
