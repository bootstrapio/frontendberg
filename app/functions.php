<?php

/* -- Enqueue Scripts and Styles -- */
add_action( 'wp_loaded', function() {
	wp_register_script('vendor', get_theme_root_uri().'/.tmp/library/scripts/vendor.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ), '', true);
	wp_enqueue_script('vendor');

	wp_register_script('main', get_theme_root_uri().'/.tmp/library/scripts/main.js', array( 'vendor' ), '', true);
	wp_enqueue_script('main');

	wp_register_style( 'main', get_theme_root_uri().'/.tmp/library/styles/main.css', array(), '' );
  wp_enqueue_style('main');
});
