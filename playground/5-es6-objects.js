const name = "Avneet";
const userAge = 33;

const user = {
    name,
    age: userAge,
    place: "India"
};
console.log(user);


const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
};

// const {label: productLabel, stock, rating = 5} = product; // destructuring

// console.log(productLabel); //renaming label
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock=0} = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);