import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archiveFile = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(archiveFile);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
