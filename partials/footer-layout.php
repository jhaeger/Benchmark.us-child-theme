<?php
/**
 * @package Make
 */

// Footer Options
$footer_layout = make_get_thememod_value( 'footer-layout' );
$sidebar_count = make_get_thememod_value( 'footer-widget-areas' );

// Test for enabled sidebars that contain widgets
$has_active_sidebar = false;
if ( $sidebar_count > 0 ) {
	$i = 1;
	while ( $i <= $sidebar_count ) {
		if ( is_active_sidebar( 'footer-' . $i ) ) {
			$has_active_sidebar = true;
			break;
		}
		$i++;
	}
}
?>

<footer id="site-footer" class="site-footer footer-layout-<?php echo esc_attr( $footer_layout ); ?>" role="contentinfo">
	<div class="container">
		<?php // Footer widget areas
		if ( true === $has_active_sidebar ) : ?>
		<div class="footer-widget-container columns-<?php echo esc_attr( $sidebar_count ); ?>">
			<?php
			$current_sidebar = 1;
			while ( $current_sidebar <= $sidebar_count ) :
				get_sidebar( 'footer-' . $current_sidebar );
				$current_sidebar++;
			endwhile; ?>
		</div>
		<?php endif; ?>

		<?php // Footer text and credit line
		get_template_part( 'partials/footer', 'credit' ); ?>

		<?php make_socialicons( 'footer' ); ?>
        
        <hr style="border-color:#555 !important"/>
        
        <div class="dba-names">
        <p>BENCHMARK does business under the following names in these states:</p>
        <p><b>Benchmark Mortgage</b>: AL, CA, CO, CT, DC, DE, FL, GA, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MO, MN, NC, ND, NE, NH, NM, OK, OR, OH, RI, PA, SC, SD, TX, UT, WA, WI, WV, WY, VA, VT</p>
        <p><b>Benchmark&nbsp;Home&nbsp;Loans</b>: AR, TN -&middot;- <b>Benchmark&nbsp;Lending</b>: NJ, NY</p>
        </div>
	</div>
</footer>