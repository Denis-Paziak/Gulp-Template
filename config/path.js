const buildFS = "./output";
const srcFS = "./src";

export const path = {
    src: {
        html: `${srcFS}/*.html`,
        scss: `${srcFS}/scss/*.scss`,
        js: `${srcFS}/js/*.js`,
        img: `${srcFS}/img/**/*.*`,
        addition: `${srcFS}/addition/**/*.*`,
    },
    buid: {
        html: `${buildFS}/`,
        css: `${buildFS}/css/`,
        js: `${buildFS}/js/`,
        img: `${buildFS}/img/`,
        addition: `${buildFS}/addition/`,
    }
}