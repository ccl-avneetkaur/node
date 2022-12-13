const fs = require("fs");
const { parse } = require("path");

// const book = {
//   title: "Hello Blockchain",
//   author: "Avneet",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Avneet";
user.age = 33;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
