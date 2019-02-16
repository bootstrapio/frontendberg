function LayoutInspectorClasses( props ) {
	return [
		{ 'hidden' : false === props.attributes.displaySuperscript },
		{ 'hidden': false === props.attributes.contentDisplay },
		{ 'hidden': false === props.attributes.mediaDisplay }
	];
}

export default LayoutInspectorClasses;
