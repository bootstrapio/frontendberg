export function IntroStyleClasses( props ) {
	return [
		{ 'intro-one': 'layout-one' === props.attributes.layoutStyle },
		{ 'intro-two': 'layout-two' === props.attributes.layoutStyle },
		{ 'intro-three': 'layout-three' === props.attributes.layoutStyle },
	];
};

export default IntroStyleClasses;
