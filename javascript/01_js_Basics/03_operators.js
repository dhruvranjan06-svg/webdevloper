// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);


// console.log(2>1);//comparison operator
// if(2>1 && 3>2){
//     console.log("hello")
// }



// console.log(2+"203")//String  2203
// console.log(2+204)//number 206
// console.log(403-"203")// 200
// console.log(2*"5")//10


//task :calculate Booking Amount of  movie tickets,
// if tickets quatity>3 then apply discount of 50 rupees 
//1.age should be >18.
let age = 20;
let quantity = 4;
let ticketPrice = 200;

if (age > 18) {
    let bookingAmount = quantity * ticketPrice;

    if (quantity > 3) {
        bookingAmount = bookingAmount - 50;
    }

    console.log("Booking Amount: ₹" + bookingAmount);
} else {
    console.log("Age must be greater than 18.");
}