import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const workerFile = path.join(__dirname, 'worker.js');
    const promisesArr = [];
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; i++) {
        const worker = new Worker(workerFile, { workerData: i + 10 });
        const promise = new Promise((resolve) => {
            worker.on('message', (result) => resolve(result));
        });
        promisesArr.push(promise);
    }

    const results = await Promise.all(promisesArr);
    console.log(results);
};

await performCalculations();
