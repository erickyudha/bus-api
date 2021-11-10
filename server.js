'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./src/routes');
const Handlebars = require('handlebars');
const Path = require('path');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8000,
        routes: {
            cors: {
                origin: ['*'],
            },
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        },
    });

    server.route(routes);
    await server.register(require('vision'));
    await server.register(require('@hapi/inert'));

    server.views({
    engines: {
        html: Handlebars
    },
    path: __dirname + '/views',
    layout: false
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();