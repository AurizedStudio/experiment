/* ==================================================

 ================================================== */
const introduce01 = function(){
	console.log('こんにちは');
	console.log('私はにんじゃわんこです');
};
introduce01();

const introduce02 = ()=>{
	console.log('アロー関数を使用');
}
introduce02();

const introduce03 = (name,age)=> {
	console.log(`私は${name}です。年齢は${age}歳です`);
}
introduce03('ジョージ4世',10);

const add01 = (a,b)=>{
	return a+b;
};
const sum01 = add01(3,5);
console.log(sum01);

const check01 = (number)=>{
	return number%2 === 0;
}
console.log(check01(3));

// レート
const dollarYenRate = 110;
// ドル->円換算
const convertToYen = (priceDollar)=> {
	return priceDollar * dollarYenRate;
};
const information = (name,price)=> {
	console.log(`アメリカドルで${name}は${price}ドルです`);
	const priceYen = convertToYen(price);
	console.log(`日本円で${name}は${priceYen}円です`);
	console.log('----------');
};
information('ジュビリーヘッド',2200);
information('トリエステ',5000);

// クラス
class Animal {
	constructor(){
		console.log('初クラス設置');
		this.name = 'ジョージ';
		this.age = 4;
	}
}
const animal = new Animal();
console.log(animal.name);

// クラス 引数
class Animal02 {
	constructor(a, age) {
		this.name = a;
		this.age = age;
	}
	greet() {
		console.log('初のクラスメソッド');
	}
	info(){
		console.log(this.name);
		console.log(`${this.age}歳です`);
	}
}
const animal02 = new Animal02('ヴィクトリア', 80);
console.log(animal02.name);
console.log(animal02.age);
animal02.greet();
animal02.info();

console.log('---------');

// クラス継承
class Dog extends Animal02 {
	getHumanAge() {
		return this.age * 7;
	}
}
const dog = new Dog('ジョージ',4);
dog.info();

const humanAge = dog.getHumanAge();
console.log(`${dog.name}は${humanAge}です`);
