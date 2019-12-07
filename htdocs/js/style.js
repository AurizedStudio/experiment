/* ==================================================
   メインナビゲーション
 ================================================== */
$(function () {
	var menuBtn = $('.menu-btn');
	var gnav = $('.gnav');
	var gBackDrop = $('.gnav-backdrop');
	var flagBtn = false;

	menuBtn.on('click', function () {
		area();
	})
	gBackDrop.on('click', function () {
		area();
	})

	gBackDrop.on('touchmove', function (e) {
		e.preventDefault();
	})

	function area () {
		if (flagBtn) { // クローズ
			menuBtn.attr('aria-expanded', 'false');
			gnav.attr('aria-hidden', 'true');
			flagBtn = false;
		} else { // オープン
			menuBtn.attr('aria-expanded', 'true');
			gnav.attr('aria-hidden', 'false');
			flagBtn = true;
		}
	}
});

/* ==================================================
   JSONファイル読み込み
 ================================================== */
$(function(){
	$.getJSON('/json/album-items.json', function(items){
		for(var i in items){
			var h = '<li>'
				+ '<img src="'+ items[i].src +'" alt="'+ items[i].alt +'">'
				+ '</li>';
			$('.is-album').append(h);
		}
	});
});

/* ==================================================
   スクロール(パララックス)
 ================================================== */
$(function(){
	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	// Scene Handler
	var scene = new ScrollMagic.Scene({
		triggerElement: ".scroll-fade-in_trigger01",
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 10, // start scene after scrolling for 50px
	//	reverse: false // only do once
	})
	.setClassToggle(".scroll-fade-in_reveal01", "visible") // add class to reveal
	.addIndicators() // add indicators (requires plugin)

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".scroll-fade-in_trigger02",
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: 10, // start scene after scrolling for 50px
	//	reverse: false // only do once
	})
	.setClassToggle(".scroll-fade-in_reveal02", "visible") // add class to reveal
	.addIndicators() // add indicators (requires plugin)

	controller.addScene([
		scene,
		scene2
	]);
});

/* ==================================================
   アコーディオン
 ================================================== */
$(function(){
	$('.acc_title').on('click', function(){
		if($(this).hasClass('is-acc_title')){ // クローズ
			$(this).removeClass('is-acc_title').attr('aria-expanded', 'false');
			$(this).next('.acc_cont').attr('aria-hidden','true').slideUp(500);
		} else { // オープン
			$(this).addClass('is-acc_title').attr('aria-expanded', 'true');
			$(this).next('.acc_cont').attr('aria-hidden','false').slideDown(100);
		}
	});
});

/* ==================================================
   ページトップへ戻る
 ================================================== */
$(function(){
	var pageTop = $('.pagetop');
	pageTop.on('click', function(){
		$('body, html').animate({scrollTop: 0}, 800);
		return false;
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 400) {
			pageTop.fadeIn(400);
		} else {
			pageTop.fadeOut(200);
		}
	})
});
