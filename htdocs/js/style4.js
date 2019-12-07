// クラス継承 上書き
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age =age;
	}
	greet() {
		console.log('こんにちは');
	}
	info() {
		this.greet();
		console.log(`名前は${this.name}です`);
		console.log(`${this.age}歳です`);
	}
}

// const suza = new Animal();
// suza.greet();

class Dog extends Animal {
	constructor (name, age, breed){
		super(name, age);
		this.breed = breed;
	}
	getHumanAge() {
		return this.age * 7;
	}
	info() {
		//		this.greet();
		console.log(`名前は${this.name}ですYo`);
		console.log(`${this.age}歳ですYo`);
		const humanAge = this.getHumanAge();
		console.log(`人間年齢で${humanAge}歳ですYo`);
		console.log(`犬種は${this.breed}ですYo`);
	}
}
const dog = new Dog('ジョージ',4,'芝');
dog.getHumanAge;
dog.info();

