function LayoutInspectorClasses( props ) {
	return [
		{ 'hidden': false === props.attributes.contentDisplayHeadline },
		{ 'hidden': false === props.attributes.contentDisplayLink },
		{ 'hidden' : false === props.attributes.contentDisplayParagraph }
	];
}

export default LayoutInspectorClasses;
