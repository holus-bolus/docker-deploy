const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
const PORT = process.env.PORT || 5000
app.post('/user', (req, res, next) => {
	res.send('<h1>' + req.body.username + '</h1>');
});


app.get('/', (req, res, next) => {
	
	res.end('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>')
});

app.listen(PORT, () => {
	console.log('Server is running on port 5000');
})