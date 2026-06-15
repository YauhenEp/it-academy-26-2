import fse from "fs-extra"

fse.ensureDir('./dir1', () => {
    fse.ensureFile('./dir1/file1.txt', () => {
        fse.ensureDir('./dir2', () => {
            fse.move('./dir1/file1.txt', './dir2/file1.txt',() => {
                fse.ensureDir('./dir3', () => {
                    fse.ensureDir('./dir3', () => {
                        fse.copy('./dir2/file1.txt', './dir3/file1.txt', () => {
                            fse.writeJson('./dir1/file.json', {"name": "myName"}, () => {
                                const data = fse.readJson('./dir1/file.json', (data) => {
                                    console.log(data);
                                });
                                fse.remove('./dir1/file.json');
                                fse.remove('./dir2/file1.txt');
                                fse.remove('./dir3/file1.txt');
                                fse.remove('./dir3');
                                fse.remove('./dir2');
                                fse.remove('./dir1');
                            });

                        });
                    });
                });
            });
        });
    });
});


// new Promise((resolve, reject) => {
//     resolve(fse.ensureDir('./dir1'))
// })
//     .then((data) => {
//         console.log('1 --- ', data)
//         return fse.ensureFile('./dir1/file1.txt')
//     })
//     .then((previosReturn) => {
//         console.log('PR  2 - ', previosReturn)
//         return fse.ensureDir('./dir2')
//     })
//     .then((previosReturn) => {
//         console.log('PR  3 - ', previosReturn)
//         return fse.move('./dir1/file1.txt', './dir2/file1.txt')
//     })
//     .then((previosReturn) => {
//         console.log('PR  4 - ', previosReturn)
//         return fse.ensureDir('./dir3')
//     })
//     .then(() => {
//         return fse.copy('./dir2/file1.txt', './dir3/file1.txt')
//     })
//     .then(() => {
//         return fse.writeJson('./dir1/file.json', {"name": "myName"})
//     })
//     .then(() => {
//         return fse.readJson('./dir1/file.json')
//     })
//     .then((data) => {
//         console.log('DATA is --- ', data)
//     }).then(() => {
//         fse.remove('./dir1/file.json');
//         fse.remove('./dir2/file1.txt');
//         fse.remove('./dir3/file1.txt');
//         fse.remove('./dir3');
//         fse.remove('./dir2');
//         fse.remove('./dir1');
//     })
//     .catch((err) => {
//         console.log(err)
//         fse.remove('./dir3');
//         fse.remove('./dir2');
//         fse.remove('./dir1');
//     })
//     .finally(() => {
//         console.log('I am always here')
//     });
    


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getPromise(min, max) {
    const random = getRandom(min, max);
    return new Promise((res, rej) => {
        if(random > 50) {
            setTimeout(() => {
                res(`Promise RESOLVE Random number ${random} is greater than 50`);
            }, random * 10);
        }
        setTimeout(() => {
            rej(`Promise REJECT Random number ${random} is leass or equal 50`);
        }, random * 10);
    })
}


// Promise.all([getPromise(50, 100), getPromise(50, 100), getPromise(50, 100)])
//     .then((result) => {
//         console.log(result)
//     })

// Promise.all([getPromise(0, 100), getPromise(0, 100), getPromise(0, 100)])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Promise.race([getPromise(50, 100), getPromise(50, 100), getPromise(50, 100), getPromise(0, 100), getPromise(0, 100), getPromise(0, 100)])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })



// Promise.allSettled([getPromise(50, 100), getPromise(50, 100), getPromise(50, 100), getPromise(0, 100), getPromise(0, 100), getPromise(0, 100)])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })


// Promise.any([getPromise(50, 100), getPromise(50, 100), getPromise(50, 100), getPromise(0, 100), getPromise(0, 100), getPromise(0, 100)])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })


// Promise.any([getPromise(0, 50), getPromise(0, 50), getPromise(0, 50)])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })



async function startProcess() {   
    await fse.ensureDir('./dir1');
    await fse.ensureFile('./dir1/file1.txt');
    await fse.ensureDir('./dir2');
    await fse.move('./dir1/file1.txt', './dir2/file1.txt');
    await fse.ensureDir('./dir3');
    await fse.copy('./dir2/file1.txt', './dir3/file1.txt');
    await fse.writeJson('./dir1/file.json', {"name": "myName"});
    const data = await fse.readJson('./dir1/file.json');
    console.log(data);
    await fse.remove('./dir1/file.json');
    await fse.remove('./dir2/file1.txt');
    await fse.remove('./dir3/file1.txt');
    await fse.remove('./dir3');
    await fse.remove('./dir2');
    await fse.remove('./dir1');
}

startProcess()