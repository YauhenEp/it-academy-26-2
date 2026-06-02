let n = 10;

while (n < 18) {
    // console.log(`n is ${n}`)
    n++
}

let m = 10;
do {
    // console.log(`m is ${m}`)
    m++
} while(m > 18);


const array = [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10];

for(let i = 0; i < array.length; i++) {
    if(array[i] % 5 === 0) {
        break
    }
    console.log(`with break - `, array[i])
}


for(let i = 0; i < array.length; i++) {
    if(array[i] % 5 === 0) {
        continue
    }
    console.log(`with continue - `, array[i])
}