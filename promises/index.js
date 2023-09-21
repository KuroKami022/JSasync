const promise = new Promise(function (resolve, reject ) {
    resolve('hey!')
});

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We Have ${cows} cows on the farm`);
    } else {
        reject('Theres no cows on the farm')
    }
});

countCows.then((result) => {
    console.log(result);
});

const cows2 = 15;

const countCows2 = new Promise(function(resolve, reject) {
    if (cows2 > 10) {
        resolve(`We Have ${cows2} cows on the farm`);
    } else {
        reject('Theres no cows on the farm')
    }
});

countCows2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'))