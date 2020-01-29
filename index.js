//assign modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//assign route
const task = require('./routes/api/task');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    //configure DB for production or development
    const db = require('./config/keys').mongoURI;

    //connect to MongoDB
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log(`MongoDB connected on ${db}`);
    }).catch(err => {
        console.log(`MongoDB connection error : ${err} on : ${db}`);
    })

    // mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));

    server.use('/api/task', task);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    let port = process.env.PORT || 3000;
    server.listen(port, function () {
        console.log(`App running on http://localhost:${port}/\nAPI running on http://localhost:${port}/api/task`)
    });
});


// //body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());




// //Allow XHttp request 
// app.use(function (req, res, next) {
//     //res.header('Access-Control-Allow-Origin', 'http://localhost:8080/');
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
//     next();
// });


// //path to html file
// app.use(express.static("public"));
// app.get('/', function (req, res) {
//     res.sendFile('index.html');
// });


// //declare route name
// app.use('/api/task', task);

// //declare port
// port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`SERVER RUNNING ON PORT : ${port}`);
// })
