import gulp from "gulp";

import { path } from "./config/path.js";
import { serverStart } from './config/task/browserSync.js';
import { html } from "./config/task/html.js";
import { scss } from "./config/task/scss.js";
import { js } from "./config/task/javaScript.js";
import { img } from "./config/task/img.js";
import { addition } from "./config/task/addition.js";
import { reset } from "./config/task/reset.js";

const { series, parallel, watch } = gulp;

const watcher = () => {
    watch(path.src.html, html);
    watch(path.src.scss, scss);
    watch(path.src.js, js);
    watch(path.src.img, img);
    watch(path.src.addition, addition);
}

gulp.task(
    "default",
    series(
        await reset,
        parallel(
            reset, serverStart, html, scss, js, img, addition, watcher,
        )
    )
);