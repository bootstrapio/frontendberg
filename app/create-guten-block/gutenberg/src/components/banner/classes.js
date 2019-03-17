export function BannerStyleClasses( props ) {
	return [
		{ 'banner-one': 'layout-one' === props.attributes.layoutStyle },
		{ 'banner-two': 'layout-two' === props.attributes.layoutStyle },
		{ 'banner-three': 'layout-three' === props.attributes.layoutStyle },
	];
};

export default BannerStyleClasses;
