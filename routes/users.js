const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  const email = req.params.email;

  let filteredUsers = users.filter((user) => user.email === email);

  res.send(filteredUsers);
});

// POST request: Create a new user
router.post("/", (req, res) => {
  const newUser = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    email: req.query.email,
    DOB: req.query.DOB,
  };
  users.push(newUser);
  res.send(`User with the name ${newUser.firstName} added to the database`);
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;

  let filteredUsers = users.filter((user) => user.email === email);

  if (filteredUsers.length > 0) {
    let user = filteredUsers[0];

    let DOB = req.query.DOB;
    if (DOB) {
      user.DOB = DOB;
    }

    let firstName = req.query.firstName;
    if (firstName) {
      user.firstName = firstName;
    }
    let lastName = req.query.lastName;
    if (lastName) {
      user.lastName = lastName;
    }

    users = users.filter((user) => user.email !== email);
    users.push(user);

    res.send(`User with the email ${email} has been updated`);
  } else {
    res.send(`User with the email ${email} not found`);
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
});

module.exports = router;
