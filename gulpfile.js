import gulp from "gulp";
import { path } from "./config/path.js";

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import browserSync from 'browser-sync';
const server = browserSync.create();

const { src, dest, parallel, watch } = gulp;

const serverStart = () => {
    server.init({
        server: {
            baseDir: path.buid.html
        }
    });
}

const html = () => {
    return src(path.src.html)
        .pipe(dest(path.buid.html))
        .pipe(server.stream());
}

const scss = () => {
    return src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.buid.css))
        .pipe(server.stream());
}

const js = () => {
    return src(path.src.js)
        .pipe(dest(path.buid.js))
        .pipe(server.stream());
}

const img = () => {
    return src(path.src.img)
        .pipe(dest(path.buid.img))
        .pipe(server.stream());
}

const addition = () => {
    return src(path.src.addition)
        .pipe(dest(path.buid.addition))
        .pipe(server.stream());
}

const watcher = () => {
    watch(path.src.html, html);
    watch(path.src.scss, scss);
    watch(path.src.js, js);
    watch(path.src.img, img);
    watch(path.src.addition, addition);
}

gulp.task("default", parallel(serverStart, html, scss, js, img, addition, watcher));