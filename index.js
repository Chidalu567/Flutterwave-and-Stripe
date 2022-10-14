// ------  Import all needed modules and libaries from node_modules directory
const express = require('express');
const app = express();
const http = require('http'); // ---- Require the http libary
const helmet = require('helmet'); // ---- require the helmet libary from node_modules
const cors = require("cors"); // ---- Require the cross origin resource module

// ----- Configure the environment variables --------------------------------
const dotenv = require('dotenv');
dotenv.config();

// ------ Create the server using http and passing app as an argument
const server = http.createServer(app); // ----- Create the instance

// ------ import all external routers
const checkoutRouter = require('./routers/checkout');

// ------ Configure all middlewares including routes
app.use(helmet.contentSecurityPolicy());
app.use(helmet.xssFilter()); // ---- Prevent cross site scripting attacks
app.use(helmet.hidePoweredBy()); // ---- Hide powered by hide the server name
app.use(helmet.noSniff()); // ---- avoid port sniffing
app.use(express.json()); // ----
app.use(express.urlencoded({ extended: false })); // ---- Use url encoded

// ------- Set your cross origin resource
app.use(cors({
    methods: ["GET"],
    origin: ["http://localhost:3000"],
    optionsSuccessStatus:200,
}))



// ---- Route handle_request
app.use('/api/', checkoutRouter); /* /checkout -> checkoutRouter handler*/


// ----- Port number -----
const PORT = 5000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on port: ${PORT}`);
})
