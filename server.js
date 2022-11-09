const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const userRoute = require("./routes/userAPI");
const authRoute = require("./routes/authAPI");
const postRoute = require("./routes/postAPI");

// express and mongoDb-connectivity
const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("welcome to our app");
});

app.listen(8080, () => {
  console.log("Server is started...");
});
