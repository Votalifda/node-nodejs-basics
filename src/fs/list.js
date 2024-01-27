import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filesPath = path.join(__dirname, 'files');
    try {
        await fs.access(filesPath, fs.constants.F_OK);
        const files = await fs.readdir(filesPath);
        for (const file of files) {
            console.log(file);
        }
    } catch {
        throw new Error('FS operation failed');
    }

};

await list();
