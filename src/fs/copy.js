import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filesPath = path.join(__dirname, 'files');
    const filesCopyPath = path.join(__dirname, 'files_copy');

    const isDirExists = async (dir) => {
        try {
            await fs.access(dir);
            return true;
        } catch {
            return false;
        }
    }

    if (!await isDirExists(filesPath) || await isDirExists(filesCopyPath)) {
        throw new Error('FS operation failed');
    } else {
        await fs.mkdir(filesCopyPath);
        const files = await fs.readdir(filesPath);
        for (const file of files) {
            const from = path.join(filesPath, file);
            const to = path.join(filesCopyPath, file);
            await fs.copyFile(from, to);
        }
    }
};

await copy();
