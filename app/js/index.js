import {APP} from './lib'

import {mainClass} from "./mainClass";
import {Header} from "./part/header";
import {Footer} from "./part/Footer";
import {Home} from "./page/Home";

const initApp = () => {

    APP.isPhoneDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    APP.mainClass = new mainClass()
    APP.Header = new Header()
    APP.Footer = new Footer()

    if(document.getElementById('home')){
        APP.Page = new Home()

    } else if(document.getElementById('ask_expert_archive-page')){
        APP.Page = ''
    }

}


window.addEventListener("resize", ()=>{
    APP.isPhoneDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(APP.isPhoneDevice){
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile')
    }

}, false);

if(APP.isPhoneDevice){
    document.body.classList.add('mobile')
}


try {
    window.addEventListener("load", initApp, false);
} catch(e) {
    window.onload = initApp;
}
