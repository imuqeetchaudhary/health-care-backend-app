const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const allRoutes = require('./routes');
const catchUnhandleExceptions = require('./middlewares/exception-handling');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/../uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	console.log('Morgan enable...');
}

app.use('/', allRoutes);
app.use(catchUnhandleExceptions);

module.exports = app;
