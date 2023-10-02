const express = require('express')
const Router = require('./src/router')
const app = express()
const cors = require('cors')
const sequelize = require('./src/config/dbConfig')
const User = require('./src/models/user.model')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({ credentials: true, origin: "http://localhost:3000", methods: 'GET,HEAD,PUT,PATCH,DELETE,POST' }));
Router(app)

// User.sync().then(()=>{
//     console.log('ok');
// })

app.listen(8000, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log('app listen on port');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})