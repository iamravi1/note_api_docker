const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const noteRoutes = require("./Routes/noteRoutes");

dotenv.config();

app.use(cors());

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Note API");
})

app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`Server started at port ${PORT}`));