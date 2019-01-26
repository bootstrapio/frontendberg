<?php

// Backend | Enqueue Assets
add_action( 'admin_enqueue_scripts', function() {
	wp_register_script('frontendberg', get_theme_root_uri().'/.tmp/library/scripts/admin.js', array(), '', true);
	wp_enqueue_script('frontendberg');

	wp_register_style( 'frontendberg', get_theme_root_uri().'/.tmp/library/styles/frontendberg.css', array(), '' );
  wp_enqueue_style('frontendberg');
});

// Frontend | Enqueue Assets
add_action( 'wp_enqueue_scripts', function() {
	wp_register_script('frontendberg', get_theme_root_uri().'/.tmp/library/scripts/frontendberg.js', array(), '', true);
	wp_enqueue_script('frontendberg');

	wp_register_style( 'frontendberg', get_theme_root_uri().'/.tmp/library/styles/frontendberg.css', array(), '' );
  wp_enqueue_style('frontendberg');
});

// Gutenberg | Enqueue Assets
add_action( 'enqueue_block_editor_assets', function() {
	// wp_deregister_style( 'wp-core-blocks-theme' );
	wp_register_script('gutenberg', get_theme_root_uri().'/.tmp/library/scripts/gutenberg.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ), '', true);
	wp_enqueue_script('gutenberg');
});

// Gutenberg | Block Categories
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'frontendberg-blocks',
				'title' => 'Blocks'
			),
			array(
				'slug'  => 'frontendberg-layouts',
				'title' => 'Layouts'
			)
		)
	);
}, 10, 2 );
