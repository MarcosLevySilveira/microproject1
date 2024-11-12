// Importing express and path modules
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors()); // Enabling Cross-Origin Resource Sharing (CORS)

// Loading data from JSON files
const data = require('./data/employees.json'); // Data for employees
const data2 = require('./data/rockbands.json'); // Data for rock bands

// Serving static files from the "public" directory
app.use('/site', express.static(path.join(__dirname, 'public')));

// Root route (home) - This will respond with a simple "Hello World" message
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API route for employees - This will return the employee data in JSON format
app.get('/api/employees', (req, res) => {
    res.json(data);  // Sending the employee data loaded from the JSON file
});

// API route for rock bands - This will return the rock band data in JSON format
app.get('/api/bands', (req, res) => {
    res.json(data2);  // Sending the rock band data loaded from the JSON file
});

// Handling 404 errors (route not found)
app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!</h1>"); // Send a 404 error page when a route is not found
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send('Something broke!'); // Send a 500 error in case of a server issue
});

// Starting the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); // Log when the server is running
});
