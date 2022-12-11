require('dotenv').config();
const { ApiServer } = require('../../dist');

console.log('Starting server...');

// Initialize the API server
const port = 3031;
const server = new ApiServer({
    server_name: 'My Example ZRPS',
    database_url: process.env.DATABASE_URL,
    database_port: parseInt(process.env.DATABASE_PORT),
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD
});

// Subscribe to events
server.events.on('started', () => {
    console.log('Server started on port ' + port);
});

// Start the API server
server.start(port);