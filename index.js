const app = require('fastify')({
    logger: true
});

app.get('/', (req, res) => {
    res.send({ messgae: 'Hello World' })
});

app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server is listening ${address}`);
});