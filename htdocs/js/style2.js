/* ==================================================

 ================================================== */
console.log("Hello World");
console.log('にんじゃわんこ');
console.log(5+3);
console.log(7 % 2);
console.log('ひつじ' + '仙人');

let length = 5;
console.log(length);
console.log(length * length * 3.14);

const name01 = 'ニンジャワンコ';
console.log(`私の名前は${name01}です`);

const age01 = 20;
if (age01 <= 20 && age01 > 10) {
  console.log('私は10代です');
} else if (age01 <=10) {
  console.log('私は一桁代です');
}

const rank01 = 5;
switch (rank01) {
	case 1:
	console.log('金メダルです');
	break;
	case 2:
	console.log('銀メダルです');
	break;
	case 3:
	console.log('銅メダルです');
	break;
	default:
	console.log('メダルではありません');
	break;
}

let number01 = 1;
while (number01 <= 3) {
	console.log(number01);
	number01 += 1;
}

for (let number02 = 1; number02 <= 5; number02 ++) {
	console.log(number02);
}

for (let number03 = 1; number03 <= 6; number03 ++) {
	if (number03%3 === 0) {
		console.log('3の倍数です');
	} else {
		console.log(number03);
	}
}

const fruits01 = ['apple', 'orange', 'banana'];
console.log(fruits01);
console.log(fruits01[0]);
console.log(fruits01[2]);
fruits01[1] = 'pinapple';
console.log(fruits01[1]);
for (let j = 0; j < fruits01.length; j++) {
	console.log(fruits01[j]);
}

const items01 = {name:'手裏剣', price:300};
console.log(items01);

const characters01 = [
	{name:'にゃんこひつじ', age:14},
	{name:'ひつじ仙人', age:1000},
	{name:'ベイビーわんこ', age:5},
	{name:'とりずきん'}
]
console.log(characters01[1].age);
for (let k = 0; k < characters01.length; k++){
	console.log('----------');
	console.log('名前は' + characters01[k].name + 'です');
	console.log(characters01[k].age + '歳です');

	const character02 = characters01[k];
	console.log(`名前は${character02.name}です`);
	if (character02.age === undefined){
		console.log('年齢がわかりません');
	} else {
		console.log(`${character02.age}歳です`);
	}
}

const character03 = {
	name: 'にんじゃわんこ',
	age: 14,
	favorite: {
		food: 'ラーメン',
		sports: '卓球',
		color: '若草色'
	},
	menu: ['コーヒー','紅茶','チョコ']
};
console.log(character03.favorite);
console.log(character03.favorite.color);
for (let l=0;l<character03.menu.length;l++){
	console.log(character03.menu[l]);
}
