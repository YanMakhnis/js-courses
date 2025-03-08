import { isCorrectValue } from "../../utils/utils.js";
export class Store {
    #inventory

    constructor(inventory) {
        this.#inventory = inventory;
    }

    addProduct() {
        let productName;
        let categoryIndex = 1;
        let productToAdd;
        const categories = Object.keys(this.#inventory)
        const categoryList = categories.map(category => `${categoryIndex++}.${category}`).join("\n");
        const productCategory = prompt(`Available categories list: \n${categoryList}\nPlease insert the product category:`);

        if (isCorrectValue(productCategory) && categories.includes(productCategory)) {
            productName = prompt("Please insert the product name:");
            if (isCorrectValue(productName)) {
                productToAdd = { name: productName };
                this.#inventory[productCategory].push(productToAdd)
                alert(`Product with name ${productName} added to category ${productCategory}`)
                this.setPrice(productToAdd)
                this.setQuantity(productToAdd)
            }
        } else alert("Wrong category name!")

    }

    removeProduct() {
        const productName = prompt("Please insert the product name:")
        if (!isCorrectValue(productName)) {
            return
        }
        let productExists = false
        const categories = this.#inventory
        console.log(categories)
        for (let category in categories) {
            const currentCutegory = categories[category]
            const index = currentCutegory.findIndex(i => i.name == productName)
            if (index !== -1) {
                alert("Product was removed!")
                productExists = true;
                currentCutegory.splice(index, 1);
                break;
            }
        }
        if (!productExists) {
            alert("Product not found")
        }
    }

    setPrice(product) {
        const price = prompt(`Please provide the price for product ${product.name}`)
        product.price = +price
        alert(`Set price ${price} for ${product.name}`)
    }

    setQuantity(product) {
        const quantity = prompt(`Please provide the quantity for product ${product.name}`)
        product.quantity = +quantity
        alert(`Set quantity ${quantity} for ${product.name}`)
    }
}