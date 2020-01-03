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

/* ==================================================
   モーダル target擬似クラス使用
 ================================================== */
$(function(){
	var flag = false;
	$('.is-modal-close01, .is-modal-close02').on('click', function(){
		modalToggle();
	})
	$('.is-modal-open').on('click', function(){
		modalToggle();
	})
	function modalToggle() {
		if (flag) { // modal close
			$('html, body').removeClass('modal-scroll-stop');
			flag = false;
			console.log(flag);
		} else { // modal open
			$('html, body').addClass('modal-scroll-stop');
			flag = true;
			console.log(flag);
		}
	}
});

/* ==================================================
   if else switch 配列
 ================================================== */
$(function(){
	$('.ifelse').on('click', function(){
		let weight;
		weight = prompt('体重は何キロ？');
		let height;
		height = prompt('身長は何センチ？') / 100;
		let bmi = weight / (height * height);
		if ((bmi >= 25) || (bmi < 18.5)) {
			alert ('あなたは問題アリ！')
		} else {
			alert ('あなたは普通体重です');
		}
	})
	$('.switch').on('click', function(){
		let rainfall;
		rainfall = prompt('降水確率は？');
		switch (true){
			case (rainfall < 20):
				alert('明日の予報は晴れ');
				break;
			case (20 <= rainfall && rainfall < 60):
				alert('明日の予報は曇り');
				break;
			case (rainfall >= 60):
				alert('明日は雨');
				break;
			default:
				alert('...');
		}

	})
	$('.foreven').on('click', function(){
		for (i=1; i<=10; i++){
			if (i%2 !== 0){
				continue;
			}
			alert(i);
		}
	})
	$('.array01').on('click', function(){
		let user = {};
		user.name = 'ヴォクトリア女王';
		user.gender = '女性';
		user.birth = '1819年5月24日';
		user.zipcode = 'SW1A 1AA';
		for (key in user){
			alert('項目：' + key + '：' + user[key]);
		}
	})
	$(function(){
		let html = '';
		let team = ['ウィリアム4世', 'ジョージ4世', 'ヴィクトリア女王', 'エドワード7世'];
		team.forEach(function (team){
			html += '<li>' + team + '</li>';
		});
		document.querySelector('.array02').innerHTML = html;
	})
});

/* ==================================================
	 オブジェクト
	 オブジェクトはプロパティとメソッドが格納されている箱のようなもの
	 プロパティは、name:'victoria' のように名前と値がペアになっているデータのこと
	 プロパティの値に関数を設定したものをメソッドと呼ぶ
 ================================================== */
$(function(){
	// オブジェクトのプロパティの値に関数を設定->メソッドを設定
	let obj = {
		helloworld: function(){
			console.log('Hello');
		}
	};
	// オブジェクトからメソッドを呼び出す。オブジェクトからメソッドを呼び出すときは、オブジェクトとメソッドを.で連結する
	obj.helloworld();
});

/* ==================================================
   関数
 ================================================== */
$(function(){
	$('.func01').on('click', function(){
		let checkKey;
		let userName, weight, height;
		let myData;
		for (i=0; i<1000; i++){
			checkKey = prompt('「1」を入力すると判定を開始します。それ以外はプログラムを終了します');
			if(checkKey === '1'){
				userName = prompt('あなたの名前を入力してください');
				weight = prompt('あなたの体重を入力してください');
				height = prompt('あなたの身長を入力してください') / 100;
				myData = userName + 'さんは' + bmiCal(weight, height);
				alert(myData);
			} else {
				i = 1000;
			}
		}
		alert ('プログラムを終了します');
	})
});
// BMIの判定
function bmiCal(weight, height){
	let bmi;
	bmi = weight/(height*height);
	let message;
	if(bmi < 18.5){
		message = '痩せ気味です';
	} else if(bmi < 25){
		message = '標準体重です';
	} else {
		message = '太り気味です';
	}
	return message;
}

/* ==================================================
   カウンター
 ================================================== */
let countId = NaN, count = 0;
function startCounter() {
	countId = setInterval(ticktack, 1000);
	console.log(countId);
}
function stopCounter() {
	clearInterval(countId);
}
function ticktack() {
	count++;
	document.getElementById('counter_count').textContent = count;
}

/* ==================================================
   年月日（本日）
 ================================================== */
$('.today').on('click', function(){
	let today = new Date(); // new演算子でインスタンス化を行ってDateオブジェクトを生成
	// 年月日を取得
	let year = today.getFullYear();
	let month =　('0' + (today.getMonth() + 1)).slice(-2);
	let day = ('0' + today.getDate()).slice(-2);
	let todayWeek = today.getDay();
	let dWeekName = ['日', '月', '火', '水', '木', '金', '土'];
	let dWeek = dWeekName[todayWeek];
	alert(year + '年' + month + '月' + day + '日' + '（' + dWeek + '）');
});

/* ==================================================
   Stringオブジェクト 文字列
 ================================================== */
$('.string').on('click', function(){
	let s = new String('本日は月曜日です');
	alert(s + '　' + '\n文字数：' + s.length);
	alert('月を金に変える' + '　' + s.replace('月', '金'));
	alert(s + '　' + '0から始まる3つ目の文字を取り出す\n実際は４文字目' + '　' + s.charAt(3));
	alert(s + '　' + '0から始まる3つ目の文字から6つ目までを取り出す\n実際は4文字目から6文字目' + '　' + s.substring(3,6));
});

/* ==================================================
   整数判別
 ================================================== */
$('.integer').on('click', function(){
	let inputNum;
	inputNum = prompt('数を入力してください');
	let num = parseFloat(inputNum); // 文字列の数字を数字に変換
	console.log(typeof num);
	if (Number.isInteger(num)){
		alert('整数です')
	} else {
		alert('整数ではありません');
	}
	let num02 = new Number(3);
	console.log(typeof num02 + ':' + num02);
});

/* ==================================================
   印刷指示
 ================================================== */
window.onload = load; // HTMLページのレンダリングが終わってから（読み込みが完了してから）
function load(){
	const ele = document.getElementsByClassName('print-btn')
	ele[0].onclick = clickPrint;
}
function clickPrint(){
	print();
}

/* ==================================================
   現在日時表示
 ================================================== */
let currentDate = document.getElementsByClassName('current-date');
console.log(currentDate[0]);
window.setInterval(function(){ // 1s毎に実行
	currentDate[0].innerHTML = new Date().toLocaleString();
}, 1000);

/* ==================================================
   Ajax data
 ================================================== */
let ajax = new XMLHttpRequest();
ajax.open('GET', 'https://aurized-studio.jp/ajax-data.json');
ajax.responseType = 'json';
ajax.send(null);
ajax.onreadystatechange = function(){
	if(ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200){
		for(let i=0; i<this.response.length; i++){
			let data = this.response[i];
			let img = document.createElement('img');
			img.setAttribute('src', data.path);
			img.setAttribute('alt', data.name + data.caption);
			let caption = document.createElement('div');
			caption.className = 'ajaxdata_caption';
			caption.innerHTML = '<p>' + data.caption + ' - ' + data.name + '</p>';
			let div = document.createElement('div');
			div.className = 'ajaxdata_photo';
			div.appendChild(img);
			div.appendChild(caption);
			document.getElementById('ajaxdata').appendChild(div);
		}
	}
};
