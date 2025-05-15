const express = require("express");
const app = express();
const port = 3000;
const petRoutes = require("./routes/pet.routes");
const calculatorRoutes = require("./routes/calculator.routes");

app.use("/", express.static("public"));

app.use("/pet-api", petRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
