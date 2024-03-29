const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;
const quizRoute = require('./router/quiz');
const jobsheetRoute = require('./router/jobsheet');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require('./models')
// db.Sequelize.sync()
console.log('Database Connected....')

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log(`Server running on port http://localhost:${port}!`));