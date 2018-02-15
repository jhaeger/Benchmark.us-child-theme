<?php
/**
 * @package Make Child
 */

/**
 * The theme version.
 */
define( 'TTFMAKE_CHILD_VERSION', '1.6.1' );

/**
 * Turn off the parent theme styles.
 *
 * If you would like to use this child theme to style Make from scratch, rather
 * than simply overriding specific style rules, simply remove the '//' from the
 * 'add_filter' line below. This will tell the theme not to enqueue the parent
 * stylesheet along with the child one.
 */
//add_filter( 'make_enqueue_parent_stylesheet', '__return_false' );

/**
 * Add your custom theme functions here.
 */
// Prevent unwanted next and prev link downloads
if(function_exists('remove_action')) { 
	remove_action('wp_head', 'start_post_rel_link', 10, 0 );
	remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); 
};

// Make a Payment page functions
function benchmark_scripts() {
    if (is_page('make-a-payment')) {
        wp_enqueue_script('magnific', get_stylesheet_directory_uri() . '/assetts/jquery.magnific-popup.min.js', array('jquery'), '1.0.0', true);
        wp_enqueue_style('magnific-css', get_stylesheet_directory_uri() . '/assetts/magnific-popup.css', array(), '1.0.0', false);
        wp_enqueue_script('benchmark.mfp', get_stylesheet_directory_uri() . '/js/benchmark.mfp.js', array('magnific'), '1.0.0', true);
    }
    elseif (is_page(array('benchmark-branches', 'apply'))) {
        wp_enqueue_script('load-lo-search', get_stylesheet_directory_uri() . '/js/load-lo-search.js', 'jquery', '1.0.0', true);
        wp_enqueue_script('branch-map', get_stylesheet_directory_uri() . '/js/branchmap.js', 'jquery', '1.0.0', true);
    }
};
add_action( 'wp_enqueue_scripts', 'benchmark_scripts');

// corproateHide class to remove content from blog posts intended only for network sites
function corporate_scripts() {
    wp_enqueue_script('corporateHide', get_stylesheet_directory_uri() . '/js/corporateHide.js', array(jquery), '1.0', true);
}
add_action( 'wp_enqueue_scripts', 'corporate_scripts');

// lifetime loan page animation
function wow_scripts() {
    if ( is_page('lifetime-loan')) {
        wp_enqueue_script('wow', get_stylesheet_directory_uri() . '/js/wow.min.js', array(), '1.1.0', true);
        wp_enqueue_style('animatecss', get_stylesheet_directory_uri() . '/animate.min.css', array(), '3.4.0', false);
    }
}
add_action( 'wp_enqueue_scripts', 'wow_scripts');

// application page javascript functionality
function applyUI() {
    if ( is_page('apply')) {
        wp_enqueue_script('applyUI', get_stylesheet_directory_uri() . '/js/applyUI.js', array(), '1.0', true);
    }
}
add_action( 'wp_enqueue_scripts', 'applyUI');

// custom login for theme
function benchmark_login() {
	echo '<link rel="stylesheet" type="text/css" href="' . get_stylesheet_directory_uri() . '/assetts/benchmark-login.css" />';
}
add_action('login_head', 'benchmark_login');

/** Force URLs in srcset attributes into HTTPS scheme.* This is particularly useful when you're running a Flexible SSL frontend like Cloudflare*/
function ssl_srcset( $sources ) {
    foreach ( $sources as &$source ) {
        $source['url'] = set_url_scheme( $source['url'], 'https' );}
    return $sources;}
add_filter( 'wp_calculate_image_srcset', 'ssl_srcset' );
