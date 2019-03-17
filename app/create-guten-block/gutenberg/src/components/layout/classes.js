export function LayoutStyleClasses( props ) {
	return [
		{ 'layout-one': 'layout-one' === props.attributes.layoutStyle },
		{ 'layout-two': 'layout-two' === props.attributes.layoutStyle },
		{ 'layout-three': 'layout-three' === props.attributes.layoutStyle },
	];
};

export default LayoutStyleClasses;
