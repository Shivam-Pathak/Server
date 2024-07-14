const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { getClient, connectdb } = require('./db');

const app = express();
const port = 3001;
const database = process.env.database;
const dbName = "employee_db";
const collectionName = "employees";


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


async function main() {
  try {
    const database = await connectdb();
    const employeeData = await fetchEmployeeData();
    console.log('Employee data:', employeeData);
  } catch (error) {
    console.error('Error:', error);
  }

}

async function fetchEmployeeData() {
  const client = getClient();
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  const employeeData = await collection.find({}).toArray();
  return employeeData;
}


main();


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
