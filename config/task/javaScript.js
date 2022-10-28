import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';

const { src, dest } = gulp;

export const js = () => {
    return src(path.src.js)
        .pipe(dest(path.buid.js))
        .pipe(server.stream());
}