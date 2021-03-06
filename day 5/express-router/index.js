const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/customer', require('./routes/customer'));
app.use('/client', require('./routes/client'));
app.use('/', require('./routes/index'));
