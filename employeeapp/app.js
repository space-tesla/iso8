const express = require("express");
const app = express();

app.use(express.json());

let employees = [];

app.post("/employees", (req, res) => {
  const emp = req.body;
  employees.push(emp);
  res.send("Employee added successfully");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.put("/employees/:id", (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const index = employees.findIndex(e => e.id == id);

  if (index === -1) {
    return res.send("Employee not found");
  }

  employees[index] = { ...employees[index], ...updateData };
  res.send("Employee updated successfully");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js

// TEST USING TERMINAL (curl):
// -----------------------------------

// 1) Add Employee
// curl -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"Gauri","salary":45000}' http://localhost:3000/employees

// 2) Update Employee
// curl -X PUT -H "Content-Type: application/json" -d '{"salary":52000}' http://localhost:3000/employees/1

// 3) View All Employees
// curl http://localhost:3000/employees
