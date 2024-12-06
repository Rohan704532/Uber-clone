const http = require('http')
const app = require('./app')
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "https://uber-clone-frontend.onrender.com",
        methods: ["GET", "POST"],
        credentials: true
    }
});

initializeSocket(io);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
