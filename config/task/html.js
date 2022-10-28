import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';

const { src, dest } = gulp;

export const html = () => {
    return src(path.src.html)
        .pipe(dest(path.buid.html))
        .pipe(server.stream());
}