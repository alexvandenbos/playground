const menu = {
    _courses: {
        appetizers: [],
        get appetizers() {
            return this.appetizers
        },
        set appetizers(appetizer) {
            return this.appetizers
        },
        mains: [],
        get mains() {
            return this.mains
        },
        set mains(main) {
            return this.mains
        },
        desserts: [],
        get desserts() {
            return this.desserts
        },
        set desserts(dessert) {
            return this.desserts
        }
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = { dishName: dishPrice }
        let selectrightarray = this._courses.filter(course => course === courseName)
        selectrightArray.push(dish)
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses.map(course => course.courseName)
        let randomIndex = Math.floor(Math.random(dishes.length))
        return dishes[randomIndex]
    },
    generateRandomMeal() {
        let appetizer = getRandomDishFromCourse("appetizers")
        let main = getRandomDishFromCourse("mains")
        let dessert = getRandomDishFromCourse("desserts")
        let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice
        return `Meal: ${appetizer.dishName}, ${main.dishName}, ${dessert.dishName} for the total price of ${totalPrice}`

    }

}