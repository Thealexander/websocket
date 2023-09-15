const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');
//const { Socket } = require('socket.io');
//const { dbConnection } = require('../database/cn');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
        }

        //Middlewares
        this.middlewares();

        //routes
        this.routes();
    }
    /*
    async cn() {
        await dbConnection();
    }
*/
    middlewares() {
        //cors
        this.app.use(cors());

        //Dir Public
        this.app.use(express.static('public'));

    }
    routes() {
        //       this.app.use(this.path.auth, require('../routes/auth'));

    }
    sockets() {
        this.io.on('connection', socketController);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;

