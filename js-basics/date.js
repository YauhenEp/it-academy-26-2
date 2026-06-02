const date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getDay())

date.setMonth(0)
console.log(date)
console.log(date.getMonth())
console.log(date.setFullYear(date.getFullYear() - 100))
console.log(date)

const previousDate = new Date('2020-01-01')
console.log(previousDate)
previousDate.setDate(previousDate.getDate() + 1)
console.log(previousDate)
console.log(previousDate.getDay())

const birthday5 = new Date(628021800000);
console.log(birthday5);


console.log(Date.now())