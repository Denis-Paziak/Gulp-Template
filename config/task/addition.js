import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';

const { src, dest } = gulp;

export const addition = () => {
    return src(path.src.addition)
        .pipe(dest(path.buid.addition))
        .pipe(server.stream());
}