import browserSync from 'browser-sync';
import { path } from "../path.js";

const server = browserSync.create();

const serverStart = () => {
    server.init({
        server: {
            baseDir: path.buid.html
        }
    });
}

export {
    server,
    serverStart
}