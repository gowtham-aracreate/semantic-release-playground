const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "hello Guys" }))

app.get("/welcome", (req, res) => res.json({ message: 'welcome you all!!!!' }))

app.get("/hello", (req, res) => res.json({ message: 'hello you all!!!!' }))

app.get("/hi", (req, res) => res.json({ message: "Hi user" }))

app.get("/sub", (req, res) => res.send({ message: `${4 - 3}` }))

app.get('/add', (req, res) => res.send("addition"));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
