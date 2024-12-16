import { default as express } from 'express';

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

const port = 8000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.join(__dirname, 'docs');
const template = path.join(__dirname, 'templates');

let app = express();
app.use(express.static(root));

app.listen(port, () => {
    console.log('Now listening on port ' + port);
});