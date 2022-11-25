const buildFS = "./output";
const srcFS = "./src";

export const path = {
    src: {
        home: `${srcFS}/`,
        html: `${srcFS}/*.html`,
        scss: `${srcFS}/scss/style.scss`,
        js: `${srcFS}/js/*.js`,
        img: `${srcFS}/img/**/*.*`,
        addition: `${srcFS}/addition/**/*.*`,
    },
    buid: {
        home: `${buildFS}/`,
        html: `${buildFS}/`,
        css: `${buildFS}/css/`,
        js: `${buildFS}/js/`,
        img: `${buildFS}/img/`,
        addition: `${buildFS}/addition/`,
    },
    watch: {
        home: `${srcFS}/`,
        html: `${srcFS}/*.html`,
        scss: `${srcFS}/scss/*.scss`,
        js: `${srcFS}/js/*.js`,
        img: `${srcFS}/img/**/*.*`,
        addition: `${srcFS}/addition/**/*.*`,
    }
}