const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) => {
//     res.send("<h1>Express</h1>");
// })

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: "Avneet"
//         },
//         {
//             name: "Anahat"
//         },

//     ])
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About</h1>")
// })

app.get('/weather', (req, res) => {
    res.send([
        {
            forecast: "It is cold today",
            location: "Mohali"
        },

    ])
})

app.listen(3000, () => {
    console.log("Server is up on 3000.");
})