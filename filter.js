const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const affordableProducts = products.filter((product) => product.price < 600);

// console.log(affordableProducts);

// const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// const filterCities = cities.filter((city) =>
//   city.toLowerCase().includes(userInput.toLowerCase())
// );
// console.log(filterCities);

const data = [1, null, 3, undefined, 5, null, 7];
const newdata = [1, 2, 3, 4, 5, 6, 7];

// Filter out null and undefined values
// const cleanedData = data.filter(
//   (value) => value !== null && value !== undefined
// );
//console.log(cleanedData);
const cleanedData = newdata.filter((data) => data % 2 != 0);

console.log(cleanedData);
