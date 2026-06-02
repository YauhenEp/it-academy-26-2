const age = 18;

if(age > 18 && age < 60) {
    console.log('You can come')
} else if(age > 60) {
    console.log('You can come with discount')
} else {
    console.log('Go away')
}

const day = 5
switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    default:
        console.log('Other day')
}

// day === 1 ? console.log('Monday') : day === 2 ?  console.log('Tuesday') : day === 3 ? console.log('Wednesday') : console.log('Other day');

const hasChild = true;

hasChild ? console.log('You can park here') : console.log('you should find another place for parking');

// if(hasChild) {
//     console.log('You can park here')
// } else {
//     console.log('you should find another place for parking')
// }