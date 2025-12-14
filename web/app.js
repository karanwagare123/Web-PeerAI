const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", productRoutes);   // ✅ correct

app.get("/health", (req, res) => res.send("OK"));

app.listen(8080, () => {
  console.log("E-commerce app running on port 8080");
});
