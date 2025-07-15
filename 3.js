const myPromise =new Promise((resolve, reject) => {
 // Asynchronous operation
 let isPizzaReady = true;
 setTimeout(() => {
    if (isPizzaReady) {
    resolve("Your pizza is here");
    } else {
     reject("Sorry, we ran out of ingredients");   
    }
 },3000); // Simulate 3 seconds delay
});
//Handling the promise
myPromise.then(message => console.log(message)).catch(error => console.error(error)); //Handle rejection