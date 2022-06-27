const express = require('express');
const AuthRoutes = require('./src/Routes/Auth');
const ProjectsRoutes = require('./src/Routes/Projects');
const UsersRoutes = require('./src/Routes/Users');

const app = express();

// Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/projects', ProjectsRoutes);
app.use('/api/users', UsersRoutes);

app.listen(8080, () => {
    console.log('Server is running on PORT: 8080.');
});