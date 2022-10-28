import gulp from "gulp";
import { path } from "../path.js";
import { server } from '../task/browserSync.js';

const { src, dest } = gulp;

export const img = () => {
    return src(path.src.img)
        .pipe(dest(path.buid.img))
        .pipe(server.stream());
}