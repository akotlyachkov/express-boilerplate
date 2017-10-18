const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    config = require('./config'),
    server = http.createServer(app),
    web = require('./web'),
    api = require('./api');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/favicon',express.static(path.join(__dirname,'web/favicon')));
app.use('/api', api);
app.use('/', web);
app.set('port', process.env.PORT || config.system.port || '3001');

server.listen(app.get('port'), function () {
    console.log('Приложение запущено на порту ' + app.get('port'));
});
