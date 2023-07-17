const express = require("express");
const cors = require("cors");
const mysql = require("mysql2")

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "abc123",
	database: "ss16july23"
});

app.post("/save", (req, res) => {
	let data = [req.body.name, req.body.company, req.body.pkg];
	let sql = "insert into student value (?, ?, ?)";
	con.query(sql, data, (err, result) => {
	if (err) res.send(err);
	else	res.send(result);	
})
})

app.listen(8000, () => {console.log("server ready at 8000");});