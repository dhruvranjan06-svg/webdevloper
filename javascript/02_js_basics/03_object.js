// const person1={
//     userName:"user_123",
//     email:"user@gmail.com",
//     age:20,
//     subscriptions:{
//         netflix:"gold",
//         amazonPrime:"basic"

//     },
//     show:function showDetails(){
//        //console.log("this  is user:"+ this.useName+ "age is :"+this.age)

//     }
// }
// const person2={
//     userName:"user_123",
//     email:"user@gmail.com",
//     age:20,
//     subscriptions:{
//         netflix:"gold",
//         amazonPrime:"basic"

//     },
//     show:function showDetails(){
//        //console.log("this  is user:"+ this.useName+ "age is :"+this.age)

//     }



//}


// console.log(person1.show() )
// const userInfo=person2.show()
// console.log("this is person2 info:",userInfo)





// person1.address="Agra"
// console.log(person1["email"])


// delete person1.userName
// console.log(person1)
// Object.keys()
// Object.values()



// object de structuting:
const{userName,age,mail}=person1
console.log(userName)
console.log(age)
console.log(email)



const obj1={a:1, b:2,}

const obj2={c:4, d:5,}

const obj3=Object.assign(obj1,obj2)
console.log("obj3",obj3)