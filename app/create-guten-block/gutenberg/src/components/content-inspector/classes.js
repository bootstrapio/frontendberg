function LayoutInspectorClasses( props ) {
	return [
		{ 'hidden' : false === props.attributes.contentDisplayParagraph },
		{ 'hidden': false === props.attributes.contentDisplayLink }
	];
}

export default LayoutInspectorClasses;
