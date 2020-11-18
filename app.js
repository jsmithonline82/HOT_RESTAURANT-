// Dependencies
const express = require('express');
const app = express();

// Sets up the Express app
const PORT = process.env.PORT || 3000;

// Listener for the server
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty array for the table reservations
  var tables = [
    {
      name: "",
      email: "",
      phone: "",
      id: "",
    },
  ];

 // Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});


  // Create New Reservations - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });
