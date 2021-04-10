const express = require('express');
const app = express();







app.get('/api/hello', (req, res) => {
    res.status(200).send('Ok!');
});




app.listen(3000);
console.log('Listening on port 3000');