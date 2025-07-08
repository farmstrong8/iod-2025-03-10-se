require("dotenv").config();
const express = require("express");
const app = express();
const _dbConnect = require("./dbConnect");
const userRoutes = require("./routes/userRoutes");

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

app.use("/api/users", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
