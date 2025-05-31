// import all user routes (up top in index.js)
const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");

// map the user routes to our app
// localhost:3000/users/3 will match the dynamic route defined in userRoutes.js
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
