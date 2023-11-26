const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const userRoute = require("./routes/users");



dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
   
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

app.use(cors());

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
app.use("/users", userRoute );

app.listen(8800, () => {
    console.log("Backend Server is running!");
}); 

