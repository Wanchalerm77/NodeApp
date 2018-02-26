
var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
           if (typeof  a === "number" && typeof  b === "number") {
               resolve(a+b);
           } else {
               reject("Arguments must be numbers")
           }
       },2000);
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hey sucker");
//         reject("Sup fuckface");
//     },2500);
// });
//
//
// somePromise.then((message) => {
//     console.log(message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

asyncAdd(3,"6").then((sum) => {
    console.log(sum);
}, (errorMessage) => {
    console.log(errorMessage);
});