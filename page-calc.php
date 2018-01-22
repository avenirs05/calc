<?php get_header(); ?>
<?php get_sidebar(); ?>
<div id="wrapper">
	<!-- <img src="<?php echo get_template_directory_uri(); ?>/calculator.png" alt=""> -->
	<h2>Калькулятор государственной пошлины</h2>
	<!--  <div class="payment-sum-wrap">
		<h5 id="final-sum-wrap"><b>Размер госпошлины составит: </b> <span id="sum-text">0</span> руб.</h5>
	</div> -->
	
	<div class="claimant-wrap">
		<h5><b>Истец:</b></h5>
		<label>
			<input id="person" type="radio" name="claimant">
			<span>&nbsp;&nbsp;Физическое лицо</span>
		</label>
		<label>
			<input id="company" type="radio" name="claimant">
			<span>&nbsp;&nbsp;Юридическое лицо</span>
		</label>
	</div>

	<div class="court-wrap">
		<h5><b>Обращение в:</b></h5>
		<label>
			<input id="general" type="radio" name="court">
			<span>&nbsp;&nbsp;Суд общей юрисдикции</span>
		</label>
		<label>
			<input id="arbitr" type="radio" name="court">
			<span>&nbsp;&nbsp;Арбитражный суд</span>
		</label>
	</div>

	<div class="request-type-wrap">
		<h5><b>Тип заявления:</b></h5>

		<label>
			<input id="claim-asset" type="radio" name="request">
			<span>&nbsp;&nbsp;Исковое обращение имущественного характера</span>.						
			<span id="span-sum-entry" style="display: none;">
				<span id="label-sum-entry"><i>Введите сумму иска:&nbsp;</i></span>
				<input id="claim-asset-sum" type="text" name="request" autofocus>&nbsp;руб.
			</span>					
		</label>

		<label>
			<input id="claim-asset-order" type="radio" name="request">
			<span>&nbsp;&nbsp;Заявление о выдаче судебного приказа</span>.						
			<span id="span-sum-entry-order" style="display: none;">
				<span id="label-sum-entry-order"><i>Введите сумму требования:&nbsp;</i></span>
				<input id="claim-asset-sum-order" type="text" name="request">&nbsp;руб.
			</span>					
		</label>
		
		<label>
			<input id="salary" type="radio" name="request">
			<span>&nbsp;&nbsp;Требование зарплат, пособий, алиментов, возмещение вреда</span>
		</label>
		
		<label>
			<input id="crime" type="radio" name="request">
			<span>&nbsp;&nbsp;Взыскание вреда причиненного в результате совершенного преступления</span>
		</label>
		
		<label>
			<input id="documents" type="radio" name="request">
			<span>&nbsp;&nbsp;Выдача документов по уголовным делам либо требованию алиментов</span>
		</label>
		
		<label>
			<input id="divorce-appeal" type="radio" name="request">
			<span>&nbsp;&nbsp;Апелляция в отношении бракоразводных процессов</span>
		</label>
		
		<label>
			<input id="adoption" type="radio" name="request">
			<span>&nbsp;&nbsp;Дела об усыновлении</span>
		</label>
		
		<label>
			<input id="invalid" type="radio" name="request">
			<span>&nbsp;&nbsp;Защита неимущественных интересов инвалидов</span>
		</label>
		
		<label>
			<input id="consumer" type="radio" name="request">
			<span>&nbsp;&nbsp;Защита потребителями своих прав при приобретении товаров и услуг</span>
		</label>
		
		<label>
			<input id="dispute-not-asset" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача искового заявления неимущественного характера</span>
		</label>	
	
		<label>
			<input id="claim-divorce" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача искового заявления о расторжении брака</span>
		</label>
		
		<label>
			<input id="gov-act" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача заявления об оспаривании нормативных актов государственных органов</span>
		</label>
		
		<label>
			<input id="alimony" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача заявления по делам о взыскании алиментов</span>
		</label>

		<label>
			<input id="agreement" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача искового заявления по спорам, возникающим при заключении, изменении или расторжении договоров</span>
		</label>

		<label>
			<input id="law-meaning" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача заявления об установлении фактов, имеющих юридическое значение</span>
		</label>

		<label>
			<input id="bankruptcy" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача заявления о признании должника несостоятельным (банкротом)</span>
		</label>

		<label>
			<input id="secure-claim" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача заявления об обеспечении иска</span>
		</label>

		<label>
			<input id="supervision" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача надзорной жалобы</span>
		</label>

		<label>
			<input id="appeal" type="radio" name="request">
			<span>&nbsp;&nbsp;Подача апелляционной жалобы и (или) кассационной жалобы</span>
		</label>

	</div>
	<div class="payment-sum-wrap">
		<h5 id="final-sum-wrap"><b>Размер госпошлины составит: </b> <span id="sum-text">0</span> руб.</h5>
	</div>

	

</div>




</div> 
<!-- #main -->

<?php do_action( 'basic_before_footer' ); ?>

<footer id="footer" class="<?php echo apply_filters( 'basic_footer_class', '' );?>" itemscope="itemscope" itemtype="http://schema.org/WPFooter">

	<?php do_action( 'basic_before_footer_menu' ); ?>

	<?php if (has_nav_menu('bottom')) : ?>
	<div class="<?php echo apply_filters( 'basic_footer_menu_class', 'footer-menu maxwidth' );?>">
		<?php 
		wp_nav_menu( array(
				'theme_location' => 'bottom',
				'menu_id' => 'footer-menu',
				'depth' => 1,
				'container' => false,
				'items_wrap' => '<ul class="footmenu clearfix">%3$s</ul>'
			)); 
		?>
	</div>
	<?php endif; ?>

	<?php do_action( 'basic_before_footer_copyrights' ); ?>
    <?php if ( apply_filters( 'basic_footer_copyrights_enabled', true ) ) : ?>
	<div class="<?php echo apply_filters( 'basic_footer_copyrights_class', 'copyrights maxwidth grid' );?>">
		<div class="<?php echo apply_filters( 'basic_footer_copytext_class', 'copytext col6' );?>">
			<p id="copy">
				<!--noindex--><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="nofollow"><?php bloginfo('name'); ?></a><!--/noindex--> &copy; <?php echo date("Y",time()); ?>
				<br/>
				<span class="copyright-text"><?php echo basic_get_theme_option('copyright_text'); ?></span>
			</p>
		</div>

		<div class="<?php echo apply_filters( 'basic_footer_themeby_class', 'themeby col6 tr' );?>">
			<?php $counters = basic_get_theme_option('footer_counters'); ?>
			<div class="footer-counter"><?php echo wp_specialchars_decode( $counters, ENT_QUOTES ); ?></div>
		</div>
	</div>
    <?php endif; ?>
	<?php do_action( 'basic_after_footer_copyrights' ); ?>

</footer>
<?php do_action( 'basic_after_footer' ); ?>


</div> 
<!-- .wrapper -->

<a id="toTop">&#10148;</a>

<?php wp_footer(); ?>
<script type= "text/javascript">function GoTo(link){window.open(link.replace("_","http://"));}</script>

<!--LiveInternet counter--><script type="text/javascript">
new Image().src = "//counter.yadro.ru/hit?r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random();</script><!--/LiveInternet-->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter45848955 = new Ya.Metrika({
                    id:45848955,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/45848955" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105806407-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-105806407-1');
</script>

<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-3.1.1.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/main.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>

</body>
</html>