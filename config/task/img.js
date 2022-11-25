import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';
import webp from 'gulp-webp';

const { src, dest } = gulp;

export const img = () => {
    return src(path.src.img)
        .pipe(webp())
        .pipe(dest(path.buid.img))
        .pipe(server.stream());
}