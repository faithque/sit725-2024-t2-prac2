# SIT725 2024 T2 - Practical 2

This project is a simple Express.js web server that provides basic calculator functionality.

## Prerequisites

- Node.js (v12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
git clone https://github.com/your-username/sit725-2024-t2-prac2.git
Copy
2. Navigate to the project directory:
cd sit725-2024-t2-prac2
Copy
3. Install the dependencies:
npm install

## Running the Server

To start the server, run:
npm start
Copy
The server will start running on `http://localhost:3000`.

## Usage

- Open a web browser and go to `http://localhost:3000` to use the calculator interface.
- You can also use the API directly:
  - GET `/add/:num1/:num2` to add two numbers
  - POST `/calculate` with a JSON body to perform more complex calculations

### API Examples

1. Adding two numbers:
GET http://localhost:3000/add/5/3
Copy
2. Using the calculator API:
POST http://localhost:3000/calculate
Content-Type: application/json
{
"operation": "multiply",
"num1": 4,
"num2": 7
}
Copy
## License

This project is licensed under the MIT License.
