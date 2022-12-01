import gulp from "gulp";

import { path } from "./config/path.js";
import { serverStart } from './config/task/browserSync.js';
import { html } from "./config/task/html.js";
import { scss } from "./config/task/scss.js";
import { js } from "./config/task/javaScript.js";
import { tsc } from "./config/task/typeScript.js";
import { img } from "./config/task/img.js";
import { addition } from "./config/task/addition.js";
import { reset } from "./config/task/reset.js";

const { series, parallel, watch } = gulp;

const watcher = () => {
    watch(path.watch.html, html);
    watch(path.watch.scss, scss);
    watch(path.watch.js, js);
    watch(path.watch.typeScript, tsc);
    watch(path.watch.img, img);
    watch(path.watch.addition, addition);
}

gulp.task(
    "default",
    series(
        await reset,
        parallel(
            reset, serverStart, html, scss, js, tsc, img, addition, watcher,
        )
    )
);