

var square = (x) => x * x;

var user = {
    name: "Non",

    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. ${this.name}`)
    }
};


console.log(square(9));
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);