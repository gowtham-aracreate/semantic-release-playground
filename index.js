const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "hello Guys" }))

app.get("/welcome", (req, res) => res.json({ message: 'welcome you all!!!!' }))

app.get("/hello", (req, res) => res.json({ message: 'hello you all!!!!' }))

app.get("/hi", (req, res) => res.json({ message: "Hi user" }))

app.get("/sub", (req, res) => res.send("4 - 2 = 2, its a subtraction"))

app.get('/add', (req, res) => res.send("4 + 2 = 1, its a addition"));

app.get('/mul', (req, res) => res.send("4 * 2 = 8, its a Multiply"));

app.get('/div', (req, res) => res.send("8/4 = 2, its a Division"));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
