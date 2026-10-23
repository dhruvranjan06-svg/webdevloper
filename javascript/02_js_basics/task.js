// calculate the subtotal using ticket price *quantity.
// if the quantity is 5 or more ,apply 15% discount.
// otherwise ,is the quantity is 3 or more,apply a 10% discount.
// Otherwise  no quantity based discount is applied.
// if the coupon code is ValidityState, apply an additional 5% discount to the amount remaining 
// after the quantity discount .
//round the final amount  using Math.round().
//print the subtotal ,discount ,and final payable amount.
//example: if the ticket price is 250 and the quantity is 3, the subtotal is 750
// the quantity discount is 75 and the coupn disount is 33.75
//the final payable amount is 641 after rounding.

// const ticketPrice = 100;
// const quantity = 5;
// const couponCode = "VALID";

// const subtotal = ticketPrice * quantity;

// let discount=0;
// if (quantity >= 5) {
// 	discount = subtotal * 0.15;
// } 
// // else if (quantity >= 3) {
// // 	discount= subtotal * 0.10;
// // }

// let amount=subtotal-discount;
// if(couponCode == "bajscbs"){
//     amount=amount-(amount *0.05);
// }
// let finalamount=Math.round(amount);



// console.log("Subtotal:", subtotal);
// console.log("Discount:", discount);
// console.log("Final payable amount:", finalamount);


//tasks:
// Create an object which has these points:
// - customerName, movieName, ticketPrice, and quantity
// - A nested customer object with email and city
// - A seats array containing at least three seat numbers
// - A method calculateTotalAmount()
// Execute these:
// 1. Print the movieName using dot notation.
// 2. Read the customer's city using nested property access.
// 3. Change the ticket price and add a bookingStatus property.
// 4. Print all object keys using Object.keys().
// 5. Destructure movieName and quantity.
// 6. Calculate and print the total booking amount.


// Create a booking object
// const booking = {
//     customerName: "Dhruv Ranjan",
//     movieName: "Avengers",
//     ticketPrice: 300,
//     quantity: 3,

//     customer: {
//         email: "dhruv@gmail.com",
//         city: "Mathura"
//     },

//     seats: [12, 15, 18],

//     calculateTotalAmount: function () {
//         return this.ticketPrice * this.quantity;
//     }
// };


// console.log(booking.movieName);
// console.log(booking.customer.city);
// booking.ticketPrice = 300;
// booking.bookingStatus = "Confirmed";
// console.log(Object.keys(booking));
// const { movieName, quantity } = booking;
// console.log(movieName);
// console.log(quantity);
// console.log(booking.calculateTotalAmount());


// Task : Shopping Cart and Variable Arguments

// Concepts: Objects, arrays inside objects, rest parameters, loops, functions

// const shoppingCart = {
//     customerName: "Rahul",
//     items: [
//         { name: "Milk", price: 30, quantity: 2 },
//         { name: "Bread", price: 40, quantity: 1 },
//         { name: "Eggs", price: 90, quantity: 2 },
//         { name: "Rice", price: 250, quantity: 1 }
//     ]
// };

// Create a shoppingCart object containing a customer name and an array of items. Each item should have a name, price, and quantity.

// Create a function calculateCartTotal(...prices) that accepts any number of prices and returns their sum.

// Create a function calculateItemTotal(item) that calculates the total cost of one item.

// Create a function calculateCartBill(cart) that calculates the complete bill.

// Apply a 10% discount if the bill exceeds ₹2,000.

// Display the Checkout Summary

// Write a function displayCheckoutSummary(cart) that displays:

// 1. Customer name

// 2. List of items with quantity and individual item total

// 3. Cart subtotal

// 4. Discount applied

// 5. Final payable amount

// Test the program with an empty cart, a single item, and multiple items.

// Interview questions:

// What is the difference between rest parameters and ordinary parameters?

// What happens when a function receives more arguments than its declared parameters?

// What is the difference between ...prices in a function parameter and the spread syntax used in a function call?


// Example output format:

// Customer: Rahul

// Milk       x 2    ₹60
// Bread      x 1    ₹40
// Eggs       x 2    ₹180
// Rice       x 1    ₹250

// Subtotal:           ₹530
// Discount:           ₹0
// Final Amount:       ₹530


const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

// 1. Calculate sum of any number of prices
function calculateCartTotal(...prices) {
    let sum = 0;

    for (let price of prices) {
        sum += price;
    }

    return sum;
}

// 2. Calculate total of one item
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// 3. Calculate complete bill
function calculateCartBill(cart) {
    let subtotal = 0;

    for (let item of cart.items) {
        subtotal += calculateItemTotal(item);
    }

    let discount = 0;

    if (subtotal > 2000) {
        discount = subtotal * 0.10;
    }

    return {
        subtotal: subtotal,
        discount: discount,
        finalAmount: subtotal - discount
    };
}

// 4. Display checkout summary
function displayCheckoutSummary(cart) {
    console.log("Customer:", cart.customerName);
    console.log("-----------------------------");

    for (let item of cart.items) {
        console.log(
            `${item.name} x ${item.quantity} = ₹${calculateItemTotal(item)}`
        );
    }

    const bill = calculateCartBill(cart);

    console.log("-----------------------------");
    console.log("Subtotal: ₹" + bill.subtotal);
    console.log("Discount: ₹" + bill.discount);
    console.log("Final Amount: ₹" + bill.finalAmount);
}

// Test the shopping cart
displayCheckoutSummary(shoppingCart);

// Test rest parameters
console.log(calculateCartTotal(30, 40, 180, 250));