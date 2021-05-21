const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes/experienceRoutes');

mongoose.connect(
    'mongodb://mongo:27017/myportfolio',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


const port = process.env.PORT || 3000;
const app = express();
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);