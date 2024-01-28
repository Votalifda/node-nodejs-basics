import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archiveFile = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(archiveFile);
    const writeStream = fs.createWriteStream(decompressedFile);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
