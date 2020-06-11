'use strict';

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

let server = app.listen(80, () => {
	console.log('Server started on http//%s:%s', server.address().address, server.address().port);
});