const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:false}));

// Web running log

// app.use(express.static('Frontend'))
// app.use((req, res, next) => {
//     console.log("Running on http://localhost:3000/")
//     // next();
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "ConnectPath.html"))
})

app.use('/', (req, res) => {
    // res.status(404).send('<h1>404 Page Not Found!</h1>');
    res.status(400).sendFile(path.join(__dirname, "Error.html"));
});

// app.listen(3000 || process.env.PORT)
app.listen(3000, () => console.log("Server is Running..."));