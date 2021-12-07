<?php
/**
 * Plugin Name:       Splide Carousel
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       splide-carousel
 *
 * @package           create-block
 */

namespace splideCarousel;
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_splide_carousel_block_init() {
	register_block_type( __DIR__ . '/src/carousel', [
		'render_callback' => function ( $_attr, $content ) {
			wp_enqueue_script( 'splide-frontend' );
			wp_enqueue_style( 'splide-frontend-style' );

			return $content;
		},
	] );
	register_block_type( __DIR__ . '/src/slide' );
}

function register_scripts() {
	$js_file       = __DIR__ . '/build/view.asset.php';
	$script_params = [];
	if ( ! file_exists( $js_file ) ) {
		$script_params = include $js_file;
	}
	wp_register_script( 'splide-frontend', plugins_url( 'build/view.js', __FILE__ ), $script_params['dependencies'], $script_params['version'] );

	$style_file   = __DIR__ . '/build/view.scss.asset.php';
	$style_params = [];
	if ( ! file_exists( $style_file ) ) {
		$style_params = include $style_file;
	}
	wp_register_style( 'splide-frontend-style', plugins_url( 'build/view.scss.css', __FILE__ ), $style_params['dependencies'], $style_params['version'] );
}

add_action( 'init', __NAMESPACE__ . '\\create_block_splide_carousel_block_init' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_scripts' );
