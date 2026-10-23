const arr=[12,34,true,"Raj"]

arr.unshift(false)
arr.push(67)
arr.join()
arr.pop()

//slice and splice
const arr1=arr.slice(1,3)

console.log(arr1)
console.log("arr",arr)

const arr2= arr.splice(1,3)

console.log(arr2)
console.log("arr",arr)

console.log(arr.indexOf(4))


// console.log(arr.length)
// console.log(arr)