//console.log('hola mundo');
//Referencia html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const btnEnviar = document.querySelector('#btnEnviar');
const txtMenjase = document.querySelector('#txtMenjase');

//
const socket = io();

socket.on('connect', () => {
    //console.log('Connectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});
socket.on('disconnect', () => {
    //console.log('DesConnectado');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-msj', (payload) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMenjase.value;
    const payload = {
        mensaje,
        id: '12345',
        fecha: new Date().getTime()
    }
    // console.log(mensaje);
    socket.emit('enviar-msj', payload, (id)=>{
        console.log('Desde el server', id);
    });
})