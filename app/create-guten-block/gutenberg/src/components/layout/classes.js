function LayoutInspectorClasses( props ) {
	return [
		{ 'hidden' : false === props.attributes.displaySuperscript },
		{ 'hidden': false === props.attributes.displayContent },
		{ 'hidden': false === props.attributes.displayMedia },
		{ 'layout-one': 'layout-one' === props.attributes.layoutStyle },
		{ 'layout-two': 'layout-two' === props.attributes.layoutStyle },
		{ 'layout-three': 'layout-three' === props.attributes.layoutStyle },
	];
}

export default LayoutInspectorClasses;
