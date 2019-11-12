// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

var fruits=[{name:"grapes",color:"green",pricePerKg:100},
{name:"avocado",color:"deepgreen",pricePerKg:200},
{name:"orange",color:"crimson",pricePerKg:50}];

function findFruit(fruitName) {
    let result = fruits.filter(fruit => fruit.name === fruitName)
    return result;
   }
   var result = findFruit("avocado");
   console.log("Fruit Name: " + result[0].name + "\nColor: " + result[0].color + "\nPrice Per KG: " + result[0].pricePerKg);


