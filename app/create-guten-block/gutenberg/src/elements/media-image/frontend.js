const { Fragment } = wp.element;

import classnames from 'classnames';

export const MediaImageFrontend = ( props ) => {
	return (
		<Fragment>
			<img
				alt={ props.attributes.mediaImageAlt }
				class='img-fluid'
				src={ props.attributes.mediaImageURL }
			/>
		</Fragment>
	);
};
