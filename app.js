const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appertizers) {
    this._courses.appetizers = appertizers;
  },

  set mains(mains) {
    this._courses.mains = mains;
  },

  set desserts(desserts) {
    this._courses.desserts = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function () {
    const appetizers = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizers.price + mains.price + desserts.price;

    return `Your meal will start with ${appetizers.name}, followed by ${mains.name} and finished off with ${desserts.name}. The price of this meal will be £${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Nachos", 3.25);
menu.addDishToCourse("appetizers", "Chicken Wings", 5.0);
menu.addDishToCourse("appetizers", "Lamb Chops", 7.5);

menu.addDishToCourse("mains", "Burger", 11.75);
menu.addDishToCourse("mains", "Chicken", 14.0);
menu.addDishToCourse("mains", "Steak", 18.5);

menu.addDishToCourse("desserts", "Cake", 4.5);
menu.addDishToCourse("desserts", "Crepes", 5.25);
menu.addDishToCourse("desserts", "Cookie Dough", 6.5);

const meal = menu.generateRandomMeal();
console.log(meal);
