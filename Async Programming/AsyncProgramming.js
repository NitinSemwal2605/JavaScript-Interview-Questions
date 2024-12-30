// Async JS Programming
// Callbacks , Promises, Async & Await 

const datas = [ 
    {name : "Nitin Semwal", Proffession : "Software Engineer"},
    {name : "Vipin Semwal", Proffession : "Software Engineer"},
];

function getDatas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            datas.forEach((data) => {
                output += `<li>${data.name}</li>`;
            });
            document.body.innerHTML = output;
            resolve();  // Resolves when data is rendered
        }, 1000);
    });
}

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            resolve();  // Resolves when new data is added
        }, 2000);
    });
}

// Use async/await to ensure the proper order of operations
async function init() {
    await createData({name : "Bhaskar Semwal", Proffession : "Software Engineer"});
    await getDatas();
}

init();