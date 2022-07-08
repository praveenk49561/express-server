const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const LoginRoutes = require('./src/Routes/Login');
const ProjectsRoutes = require('./src/Routes/Projects');
const UsersRoutes = require('./src/Routes/Users');

const ErrorHandlers = require('./src/Middlewares/ErrorHandlers');
const AuthHandler = require('./src/Middlewares/Auth');
const { DB_URL, PORT } = require('./config');

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(AuthHandler);

// Routes
app.use('/api/login', LoginRoutes);
app.use('/api/projects', ProjectsRoutes);
app.use('/api/users', UsersRoutes);


// Error handlers
app.use(ErrorHandlers);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    mongoose.connect(DB_URL).then(() => {
        console.log('Successfully Connected To The Database.')
    }).catch((error) => {
        console.error('[ERROR]');
        console.error('Failed To Connect To The Database')
        console.error(error);
        process.exit(1);
    })
});