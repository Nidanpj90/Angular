maxValue(2,1);

function maxValue(value1:number, value2:number) {
    return Math.max(value1, value2);
}

//definición de tipos

//boolean

let isBoolean: Boolean = false;

//number

let decimal: number =43.343;
let age: number = 20;

//String

let myName: string = 'Samuel';

//Array

let listAges: number[] = [10,12,40];
let listNames: Array<String> = ['Juan', 'María'];

//Tuplas

let personTuple: [string,number];
personTuple = ['Samuel', 30];

//Enums

enum color {Red, Green, Yellow, Purple, Brown};

//Any

let notSure: any = '345';
notSure = 24;
notSure = true;

//Void

function alertUser(): void {
    alert('Alert with function void');
}

//Null
let u: null = null;

//undefined

let indefinido: undefined = undefined;

//clases

class Animal{
    readonly name: string;
    private age: number;
    public skinColor: color;

    constructor(name: string, age: number, skinColor: color){
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }

    greet(): string{
        return `Hello, ${this.name}`;
    }    
}

let animal = new Animal('Juan', 30, color.Green);
animal.skinColor = color.Brown;
alert(animal.greet());

//Herencia

class Dog extends Animal{
    greet(): string{
        return `Woof! woof! ${this.name}`;
    }
}

//Abstractas

abstract class Person {
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Developer extends Person{

}

let personDeveloper = new Developer ('Samuel');

//Condicionales

if(personDeveloper.name === 'Samuel'){
    console.log();
}

//Iterators
