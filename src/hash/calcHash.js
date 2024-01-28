import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = fs.createReadStream(file);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

await calculateHash();
