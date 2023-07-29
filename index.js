const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const createEvent = require("./routes/createEvent");
const getEvents = require("./routes/getEvents");
app.use("/api/event/create", createEvent);
app.use("/api/event/get", require("./routes/getEvents"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
