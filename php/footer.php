<?php

/**

 * The template for displaying the footer.

 *

 * Contains the closing of the #content div and all content after

 *

 * @package Hexa

 */

?>



	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">

		<div class="site-info">

			<?php do_action( 'hexa_credits' ); ?>

			<a href="http://wordpress.org/" rel="generator"><?php printf( __( 'Powered by %s', 'hexa' ), 'WordPress' ); ?></a>

			<span class="sep"> | </span>

			<?php printf( __( 'Theme: a modified %1$s by %2$s.', 'hexa' ), 'Hexa', '<a href="http://automattic.com/" rel="designer">Automattic</a>' ); ?>

		</div><!-- .site-info -->

	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>



</body>

</html>