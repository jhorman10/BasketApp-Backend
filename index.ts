import Server from './classes/server';

const server = new Server();

// levanntar express
server.start( ()=>{
    console.log(`servidor corriendo en puerto  ${ server.port}`);
});