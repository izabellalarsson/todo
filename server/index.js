const express = require('express');
const cors = require('cors');
const connection = require('./database');
const app = express();
const tasks = require('./routes/tasks');
const Task = require('./models/task');

connection();

app.use(express.json());
app.use(cors());

app.use(tasks);

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
