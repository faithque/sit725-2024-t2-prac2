const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Root endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// GET endpoint for adding two numbers
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 + num2;
    res.json({ result: result });
});

// POST endpoint for calculator operations
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    let result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    res.json({ result: result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});