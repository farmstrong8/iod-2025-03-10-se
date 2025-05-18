const express = require("express");
const app = express();
const port = 3000;
const petRoutes = require("./routes/pet.routes");
const calculatorRoutes = require("./routes/calculator.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/", express.static("public"));

app.use("/pet-api", petRoutes);
app.use("/calculator", calculatorRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
