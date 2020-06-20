var number = 5; // in comment

/*

adst
*/


var firstName = 'Ho\n\nl"ger' + ' ' + 'Seith ';
let age = 36
firstName += age
if (age == 36) {

    //    console.log(firstName[8]);
}


//wordBlanks("dog", "big", "ran", "quickly");
//wordBlanks("bike", "slow", "flew", "slowly");


var ourArray = []

ourArray.push("holger", "seith");
ourArray.shift();

const LOCAL_FORECAST = {
    today: { min: 10, max: 25 },
    tomorrow: { min: 5, max: 20 }
};

function getMax(forecast) {

    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}


console.log(getMax(LOCAL_FORECAST));

let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(a);
console.log(b);

let arr = [1, 2, 3, 4];


class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

let person = new Person("Holger");
person.name = "Seith";

console.log(person.name);
