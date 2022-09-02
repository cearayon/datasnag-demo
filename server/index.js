// requiring the express and cors libraries
const express = require('express');
const cors = require('cors');

// invoking express
const app = express();

// assigning the server port to a variable 'port' for easier reference and editing
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server is live on port ${port}.`));
