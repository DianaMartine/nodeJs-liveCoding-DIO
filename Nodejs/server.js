const http = require('http');
const port = 3000;
const stats = require('./pcRamUsage.js');

http.createServer((req, res) => {
	res.end(JSON.stringify(stats, null, 2));
}).listen(port, () => console.log(`Server is running in http://localhost:${port}`));

