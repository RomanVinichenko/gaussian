import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import Swiper from "swiper/swiper-bundle";


export const APP = {}

window.APP = APP
APP.gsap = gsap
APP.gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
APP.ScrollTrigger = ScrollTrigger
APP.Swiper = Swiper