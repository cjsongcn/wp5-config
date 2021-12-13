function helloWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello world!');
        }, 1000)
    })
}

async function run() {
    const res = await helloWorld();

    console.log(res);
}

run();