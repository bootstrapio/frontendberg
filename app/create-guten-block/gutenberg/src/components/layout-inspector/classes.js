function LayoutInspectorClasses( props ) {
	return [
		{ 'hidden' : false === props.attributes.displaySuperscript },
		{ 'hidden': false === props.attributes.displayContent },
		{ 'hidden': false === props.attributes.mediaDisplay }
	];
}

export default LayoutInspectorClasses;
