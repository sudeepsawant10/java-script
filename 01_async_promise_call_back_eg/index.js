// console.log("js included");
// Async js Programming
// Callbacks, Proimises, Async & Await

// Problem Statement
// newly added data not updating on the interface
// solution use callback to update

const datas = [
    { name:"Ajay", profession:"Software Engineer" },
    { name: "Anuj", profession: "Software Developer"}
];

const getData = () => {
    let output = "";
    setTimeout(() => {
        datas.forEach((element, idx) => {
            output +=  `<li>${element.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const addNewElement= (newData, callback) => {
    setTimeout(()=>{
        datas.push(newData);
        callback();
    }, 3000);
}


// addNewElement({ name: "Vivek", profession: "Graphic Designer"}, getData)
// getData();



/* USING PROMISE */
// if you are using promise then no need to use callback
const addNewElement2 = (newData) =>{
    return new Promise((resolve, reject)=>{
        datas.push(newData);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject("Failed to add new data!");
        }
    }, 2000);
}

// addNewElement2({ name: "Vivek", profession: "Graphic Designer"}).then(getData).catch(err => console.log("Failed to add new data"));


/* ASYNC & AWAIT */
// sync = executions happens step by step 1 , 2,3 4, 5
// async = execution sequence is not decided (depends on resource)
// await always work with async function


const addNewElement3= (newData) => {
    return new Promise((resolve, reject)=>{
        datas.push(newData);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject("Failed to add new data!");
        }
    }, 2000);
}

async function start(){
    await addNewElement3({ name: "Vivek", profession: "Software Engineer"})
    getData();
}
start();
