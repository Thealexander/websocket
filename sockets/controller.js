const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-msj', (payload, callback) => {
        const id = 123456;
        callback({
            id,
            fecha: new Date().getTime()
        });
        socket.broadcast.emit('enviar-msj', payload)

    })
}

module.exports = {
    socketController
}