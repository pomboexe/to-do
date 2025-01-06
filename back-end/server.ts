import fastify from "fastify";

const server = fastify()

server.get('/home', async (req, res) =>{
    return 'server home'
})

server.listen({port: 3001},(err, address) => {
    if(err){
        console.error('server not running', err)

    }
    console.log(`Server listen in ${address}`)
})