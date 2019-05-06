export function BannerStyleClasses( props ) {
	return [
		{ 'component-tab-horizontal': 'layout-one' === props.attributes.layoutStyle },
		{ 'component-tab-vertical': 'layout-two' === props.attributes.layoutStyle },
	];
};

export default BannerStyleClasses;
