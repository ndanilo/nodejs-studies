const settings = require('./config/settings');
const app = settings();

const port = process.env.port || 3000;
const host = process.env.host || '0.0.0.0';

app.listen(port, host);

console.log(`Server Message: ${process.env.hello}`);
console.log(`running on: http://${host}:${port}`);