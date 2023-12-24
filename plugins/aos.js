// @/plugins/aos.js
// I've went ahead to declare all the config here so it is global
import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(
  AOS.init({
    disable: false,
    startEvent: "load",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease-in-out-quad",
    // once : false; make animation work always scroll
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  })
);
