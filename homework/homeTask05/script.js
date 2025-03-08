import { Store } from "./store.js";

const defaultInventory = {
    dairy: [
        { name: "milk", price: 50, quantity: 10 },
        { name: "butter", price: 80, quantity: 15 },
        { name: "cheese", price: 150, quantity: 5 },
        { name: "sour-cream", price: 60, quantity: 12 }
    ],
    meat: [
        { name: "beef", price: 500, quantity: 8 },
        { name: "pork", price: 300, quantity: 12 },
        { name: "chicken", price: 200, quantity: 15 },
        { name: "lamb", price: 700, quantity: 4 }
    ],
    fish: [
        { name: "salmon", price: 800, quantity: 6 },
        { name: "caviar", price: 1000, quantity: 2 },
        { name: "tuna", price: 600, quantity: 4 },
        { name: "shrimp", price: 400, quantity: 10 }
    ],
    bakery: [
        { name: "bread", price: 40, quantity: 30 },
        { name: "pie", price: 120, quantity: 10 },
        { name: "muffin", price: 50, quantity: 25 },
        { name: "cookie", price: 20, quantity: 40 }
    ],
    vegetables: [
        { name: "tomato", price: 30, quantity: 35 },
        { name: "cucumber", price: 25, quantity: 50 },
        { name: "carrot", price: 15, quantity: 40 },
        { name: "potato", price: 20, quantity: 60 },
        { name: "cabbage", price: 10, quantity: 50 }
    ],
    fruits: [
        { name: "orange", price: 35, quantity: 30 },
        { name: "apple", price: 25, quantity: 60 },
        { name: "pear", price: 40, quantity: 20 },
        { name: "banana", price: 30, quantity: 45 }
    ]
}
const store = new Store(defaultInventory)
store.addProduct()
// store.removeProduct()
console.log(store)