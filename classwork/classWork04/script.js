// let user = {};
// console.log(user)
// user.name = "Виктория";
// user["surname"] = "Толкачёва";
// console.log(user)
// user.name = "Елена";
// console.log(user)
// delete user.name
// console.log(user)


// function isEmpty(obj){
//     for(key in obj){
//         return false;
//     }
//     return true;
// }

// const isEmptyObject = isEmpty(user)
// const isEmptyObject2 = isEmpty({})
// console.log(isEmptyObject)
// console.log(isEmptyObject2)

// const salaries = {
//     "John_Smith": 500,
//     "Adam_Brooks": 300,
//     "Christian_Murphy": 1000,
//     "Ben_Handscom": 5000,
//     "totalSalaryInn": function () {
//         let total = 0;
//         for (key in this) {
//             if (key === "totalSalaryInn") {
//                 continue;
//             }
//             total += this[key]
//         }
//         console.log(total)

//     }
// };

// let totalSalary = 0;
// function moneyAmount(obj) {
//     for (key in obj) {
//         totalSalary += obj[key]
//     }
//     return totalSalary;
// }

// // console.log(moneyAmount(salaries))
// salaries.totalSalaryInn()

let someObj = {
    "className": "main desktop car building fog value"
}

function addClass(obj, cls) {
    for (key in obj) {
        if (key === "className") {
            let value = obj[key]
            if (!value.includes(cls)) {
                value += ' ' + cls
                obj[key] = value;
            }
        }
    }
    return obj
}

function removeClass(obj, cls) {
    if (obj.className && obj.className.includes(cls)) {
        obj["className"] = obj["className"].replace(cls, '')
    }
    return obj;
}


function toggleClass(obj, cls) {
    const objectContainsCls = obj.className && obj.className.includes(cls);
    return objectContainsCls ? removeClass(obj, cls) : addClass(obj, cls)
}

// console.log(addClass(someObj, "desktop2"));
// console.log(addClass(someObj, "icon"));
// console.log(addClass(someObj, "screen"));
// console.log(removeClass(someObj, "screen"));
// console.log(removeClass(someObj, "desktop"));

// console.log(toggleClass(someObj, "screen"));
// console.log(toggleClass(someObj, "car"));

const car = {
    brand: undefined,
    model: undefined,
    year: undefined,
    mileage: undefined,
    setBrand: function (brand) {
        if (typeof brand === 'string' && brand.trim() !== '') {
            this.brand = brand
        }
    },
    setModel: function (model) {
        if (typeof model === 'string' && model.trim() !== '') {
            this.model = model
        }
    },
    setYear: function (year) {
        if (typeof year === 'number' && year >= 1950 && year <= new Date().getFullYear()) {
            this.year = year
        }
    },
    increaseMileage: function (mileage) {
        if (this.mileage === 'undefined') {
            this.mileage = mileage
        } else if (mileage > 0) {
            this.mileage += mileage
        }
    },
    countAge: function () {
        console.log(`Машине ${new Date().getFullYear() - this.year} лет`)
    },
    showInfo: function (str) {
        switch(str){
            case "model":
                console.log(this.model);
                break;
            case "brand":
                console.log(this.brand);
                break;
            case "year":
                console.log(this.year);
                break;
            case "age":
                console.log(this.countAge());
                break;
            case "mileage":
                console.log(this.mileage);
                break;
            default:
                console.log(this)
        }
    }
}

car.setBrand("BMW")
car.setModel("535")
car.setYear(1951)
car.increaseMileage(12)

car.showInfo("brand")
car.showInfo("year")
car.showInfo("model")
car.showInfo("age")
car.showInfo("mileage")
car.showInfo()
