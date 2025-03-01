const store = {
    inventory: {
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
    },

    addProduct: function () {
        let productName;
        let categoryIndex = 1;
        let productToAdd;
        const categories = Object.keys(this.inventory)
        const categoryList = categories.map(category => `${categoryIndex++}.${category}`).join("\n");
        const productCategory = prompt(`Available categories list: \n${categoryList}\nPlease insert the product category:`);

        if (isCorrectValue(productCategory) && categories.includes(productCategory)) {
            productName = prompt("Please insert the product name:");
            if (isCorrectValue(productName)) {
                productToAdd = { name: productName };
                store.inventory[productCategory].push(productToAdd)
                alert(`Product with name ${productName} added to category ${productCategory}`)
                this.setPrice(productToAdd)
                this.setQuantity(productToAdd)
            }
        } else alert("Wrong category name!")

    },
    removeProduct: function () {
        const productName = prompt("Please insert the product name:")
        if(!isCorrectValue(productName)){
            return
        }
        let productExists = false
        const categories = this.inventory
        for (category in categories) {
            const currentCutegory = categories[category]
            const index = currentCutegory.findIndex(i => i.name == productName)
            if (index !== -1) {
                alert("Product was removed!")
                productExists = true;
                currentCutegory.splice(index, 1);
                break;
            }
        }
        if(!productExists){
            alert("Product not found")
        }
    },

    setPrice: function(product){
        const price = prompt(`Please provide the price for product ${product.name}`)
        product.price = +price
        alert(`Set price ${price} for ${product.name}`)

    },

    setQuantity: function(product){
        const quantity = prompt(`Please provide the quantity for product ${product.name}`)
        product.quantity = +quantity
        alert(`Set quantity ${quantity} for ${product.name}`)

    }
}

function isCorrectValue(value) {
        return value && value.trim().length > 0
}

store.addProduct()
// store.removeProduct()
console.log(store.inventory)

