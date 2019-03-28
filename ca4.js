const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    get mains() {
        return this._courses.mains
    },
    set mains (mainsIn) {
        this._courses.mains = mainsIn;
    },
    get desserts () {
        return this._courses.desserts
    },
    set desserts (dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get courses () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse (courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]
    },
    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + mains.price + desserts.price;
        return `1) ${appetizer.name} 2) ${mains.name} 3) ${desserts.name} Total price: ${totalPrice}`
    }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Oliv', 2.25);
menu.addDishToCourse('appetizers', 'Vinegr', 1.25);
menu.addDishToCourse('mains', 'Stroganoff', 10.00);
menu.addDishToCourse('mains', 'Steake', 15.25);
menu.addDishToCourse('mains', 'Shashlik', 12.25);
menu.addDishToCourse('desserts', 'Cheasecake', 1.25);
menu.addDishToCourse('desserts', 'Icecream', 1.25);
menu.addDishToCourse('desserts', 'Cacao', 0.25);
const meal = menu.generateRandomMeal();
console.log(meal);