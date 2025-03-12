const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send(`
	
	<!DOCTYPE html>
	<html>
	<head>
	<title>Form</title>
			</head>
			<body>
			<h2>Hello world</h2>
</body>
			</html>
	`);
})

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})