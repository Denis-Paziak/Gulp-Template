import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const { src, dest } = gulp;

export const scss = () => {
    return src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.buid.css))
        .pipe(server.stream());
}