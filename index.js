const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = ['Task 1', 'Task 2', 'Task 3'];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
