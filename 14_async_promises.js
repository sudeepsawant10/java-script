/*
    Promises;
    resolve = promise done
    reject = promise failed
    // Takes cb functions
*/

/*
Example 1
 */

// const promise = new Promise((resolve, reject)=>{
//     console.log("Async task execution");

//     // throw 'err';
//     // if promise is resolve

//     if(false) {
//         const person = {name: "Sudeep"}
//         resolve(person);
//     }
//     else {
//         const error = { errCode: "1001"}
//         reject(error);
//     }
// });


// // interact promise using then
// promise.then(
//     // for resolve
//     (val)=>{ console.log(val);},
//     // for reject
//     // (err)=>{ console.log(err);}
// )//tocatch error if rejected this will run
// .catch((err) => console.log("Failed", err))
// // to run even failed or pass
// .finally(() => console.log("Promises done"))


/*
Example 2
- if promise is already being resolved
- promises are by default asynchrnous in nature
- cb they are not asynchronous by default we have to use setTimeOut in order to make it async execution
 */

/*
let p = Promise.resolve("Execution is done");
// let q = Promise.reject("Execution is rejected");

// even though the promise is resolved we can still interact it using then() handler 
// it is not possible when you use cb once the cb function executed you cannot interact with it
p.then((val) => { console.log(val); })

*/

/*
Example 3 cb example of asyn
// */

// function asyncTask(cb) {
//     cb();
// }

// call backs are not async by defaut gives referneceError
// asyncTask( () => console.log(name));
// const name = "Dipesh";

// Converting into promise
/*
 - promises are taken out of execution flow and executes later on.
*/

/*
function asyncTask() {
    return Promise.resolve();
}

asyncTask().then(() => console.log(name));
const name = "Dipesh";
 */


// CHAINING IN PROMISES
// const p = Promise.resolve("Done");
// // const p = Promise.reject("Failed");
// p.then((val) => {
//     console.log(val);
//     // You have to return something in every handler for promises chaining
//     return "done2";
// }).then((val) => {
//     console.log(val);
//     return "dnoe3";
//     // if you do not return chain will break
// }).then((val) =>{
//     console.log(val);
// })
// .catch(val => {
//     console.log(val);
// }) ;


// PROMISE all() AND PROMISE race()
const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("This API executed in: "+ time)
        },time)
    }).catch(()=>{
        console.log("Failed")
    })
}

// makeApiCall(2000).then(val => {
//     console.log(val);
// });

let multiApiCall = [
    makeApiCall(1000),
    makeApiCall(2000),
    makeApiCall(500),
];
// execute promises only when execution of api is done
// This api called simultaneous not waiting for other one
Promise.all(makeApiCall).then((values)=>{
    console.log(values);
});

Promise.race(multiApiCall).then(value => {
    console.log(value);
});