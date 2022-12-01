import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';
import ts from "gulp-typescript";

const { src, dest } = gulp;

export const tsc = () => {
    return src(path.src.typeScript)
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'script.js'
        }))
        .pipe(dest(path.buid.typeScript))
        .pipe(server.stream());
}