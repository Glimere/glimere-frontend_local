import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'glimere'
})

app.get("/", (req, res) => {
    res.json('Hello, welcome to glimere API');
})

app.get("/apparel",(req, res) => {
    const q = "SELECT * FROM apparel";
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.listen(9000, () => {
    console.log('Server is running on port 9000');
})