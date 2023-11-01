const app = require('fastify')({
    logger: true
});

app.get('/', (req, res) => {
    res.send({ messgae: 'Hello World' })
});

// Register routes to handle blog posts
const blogRoutes = require('./routes/blogs')
blogRoutes.forEach((route, index) => {
    app.route(route)
});

app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server is listening ${address}`);
});