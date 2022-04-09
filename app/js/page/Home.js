// import Swiper from "swiper/swiper-bundle";
// import {Accordion} from "../part/Accordion";

export class Home {
    constructor() {
        this.page = document.getElementById('home')
        this.intStartSlider()
        this.newsSlider()
        this.bigSlider()
        // this.initSliders()
        // this.initTab()
        // this.initMobTab()
        // this.downloadSection()
    }

    intStartSlider(){
        const slider = this.page.querySelector(`#home_slider`);

        const homeSlider = new APP.Swiper(slider, {
            spaceBetween: 0,
            slidesPerView: 1,
            on:{
                init : (el)=>{
                    const slidesCount = el.slides.length;
                    el.slides.forEach((el, index)=>{
                        const navPagination = el.querySelector('.slider_pagination');
                        for(let i=1; i < slidesCount; i++) {
                            let el = document.createElement('span')
                            if (i === index + 1) {
                                el.classList.add('active')
                            }
                            navPagination.appendChild(el)
                        }
                    })
                }
            }
        });
    }

    newsSlider(){
        let slider = this.page.querySelector(`#news-swiper`);
        const swiper = new APP.Swiper(slider, {
            spaceBetween: 0,
            slidesPerView: 4,
            scrollbar: {
                el: '.news-scrollbar',
                draggable: true,
            },
            //
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }

    bigSlider(){
        const slider = this.page.querySelector(`#single-swiper`);
        const _this = this;
        let bigSlider = new APP.Swiper(slider, {
            spaceBetween: 0,
            slidesPerView: 1,
            loop: false,
            centeredSlides: true,
            initialSlide: 1,
            scrollbar: {
                el: '.big-scrollbar',
                draggable: true,
            },
            on:{
                init : (el)=>{
                    const slidesCount = el.slides.length;
                    const sliderNav = this.page.querySelector('#slider-navs')


                    el.slides.forEach((slide, index)=>{
                        let li = document.createElement('li')
                        let button = document.createElement('button')
                        li.classList.add('nav_item')
                        if (index === 0) {
                            li.classList.add('active')
                        }
                        button.innerText = slide.dataset.title
                        button.addEventListener('click', ()=>{
                            gotSlide.call(this, index)
                            bigSlider.slideTo(index)
                        })
                        li.append(button)
                        sliderNav.append(li)
                    })
                    gotSlide.call(this, el.activeIndex)
                },
                slideChange: (el)=>{
                    gotSlide.call(this, el.activeIndex)
                }

            }
        });

        function gotSlide(id){
            const sliderNav = this.page.querySelector('#slider-navs')
            const btns = sliderNav.querySelectorAll('.nav_item')
            btns.forEach((el, index)=>{
                if(id === index){
                    el.classList.add('active')
                } else {
                    el.classList.remove('active')
                }
            })

        }


    }

    initCanvasSlider(){


    }


    // downloadSection(){
    //
    //     const section = this.page.querySelector('.guide_form')
    //     const sectionDownload_link = section.dataset.link
    //     const form = section.querySelector('.wpcf7')
    //
    //     document.addEventListener( 'wpcf7mailsent', ( event )=> {
    //     // document.addEventListener( 'wpcf7submit', ( event )=> {
    //         if (  form.getAttribute('id') === event.detail.unitTag ) {
    //             let a = document.createElement('a');
    //             document.body.appendChild(a);
    //             a.style.display = 'none'
    //             a.setAttribute('download','download');
    //             a.setAttribute('target','_blank');
    //
    //             a.href = sectionDownload_link
    //             a.click();
    //         }
    //     }, false );
    // }
    //
    // initSliders(){
    //     this.sellerSlider('seller')
    //     // this.startSlider('buyers')
    //     this.startSlider('podcast')
    //     // this.startSlider('advice')
    // }
    //
    // sellerSlider(prefix){
    //     let slider = this.page.querySelector(`.${prefix}_swiper`);
    //     const swiper = new Swiper(slider, {
    //         spaceBetween: 0,
    //         slidesPerView: 1,
    //         allowTouchMove: false,
    //         // navigation: {
    //         //     nextEl: `.${prefix}_next`,
    //         //     prevEl: `.${prefix}_prev`,
    //         // },
    //         // pagination: {
    //         //     el: `.${prefix}-dot`,
    //         // },
    //         // autoplay: {
    //         //     delay: 5000,
    //         //     pauseOnMouseEnter: true
    //         // },
    //         // // mousewheel: {
    //         // //     invert: false,
    //         // // },
    //         // breakpoints: {
    //         //     0: {
    //         //         slidesPerView: 1,
    //         //     },
    //         //     576: {
    //         //         slidesPerView: 2,
    //         //     },
    //         //     1024: {
    //         //         slidesPerView: 3,
    //         //     },
    //         //     1200: {
    //         //         slidesPerView: 4,
    //         //     }
    //         // }
    //     });
    // }
    //
    // startSlider(prefix){
    //     let slider = this.page.querySelector(`.${prefix}_swiper`);
    //     const swiper = new Swiper(slider, {
    //         spaceBetween: 0,
    //         slidesPerView: 4,
    //         navigation: {
    //             nextEl: `.${prefix}_next`,
    //             prevEl: `.${prefix}_prev`,
    //         },
    //         pagination: {
    //             el: `.${prefix}-dot`,
    //         },
    //         //
    //         breakpoints: {
    //             0: {
    //                 slidesPerView: 1,
    //             },
    //             576: {
    //                 slidesPerView: 2,
    //             },
    //             1024: {
    //                 slidesPerView: 3,
    //             },
    //             1200: {
    //                 slidesPerView: 4,
    //             }
    //         }
    //     });
    // }
    //
    // initTab(){
    //     const main_el = this.page.querySelector('.vertical_tab')
    //     const tabToggles = main_el.querySelectorAll('.tab_toggle')
    //     const tabItem = main_el.querySelectorAll('.tab_item')
    //     let currentToggles = tabToggles[0];
    //     let currentItem = tabItem[0];
    //     tabToggles.forEach((el, index)=>{
    //         el.addEventListener('click', ()=>{
    //             if(!el.classList.contains('active')){
    //                 let current = index
    //                 new Promise((resolve, reject) => {
    //                     APP.gsap.to(currentItem, {
    //                         height: 0,
    //                         duration: 0.5,
    //                         ease: "Power1.easeOut",
    //                         clearProps: 'all',
    //                         onComplete: ()=>{
    //                             currentItem.classList.remove('active')
    //                             currentToggles.classList.remove('active')
    //                             resolve('done');
    //                         }
    //                     })
    //                 })
    //                     .then((done)=>{
    //                         currentItem = tabItem[current];
    //                         currentToggles = el;
    //                         return done;
    //                     })
    //                     .then((done)=>{
    //                         APP.gsap.set(currentItem, {
    //                             height: 'auto',
    //                         })
    //                         APP.gsap.from(currentItem, {
    //                             height: 0,
    //                             duration: 0.5,
    //                             ease: "Power1.easeOut",
    //                             clearProps: 'all',
    //                             onComplete: ()=>{
    //                                 currentItem.classList.add('active')
    //                                 currentToggles.classList.add('active')
    //                                 return done;
    //                             }
    //                         })
    //                     })
    //             }
    //         })
    //
    //     })
    //
    //
    //     let panels = this.page.querySelectorAll('.panel_list');
    //     panels.forEach((el)=>{
    //         const args = {
    //             panel : el,
    //         }
    //         new Accordion(args)
    //     })
    //
    //
    // }
    //
    // initMobTab(){
    //     const main_el = this.page.querySelector('.horizontal_tab')
    //     const tabToggles = main_el.querySelectorAll('.acc_item')
    //     let currentToggles = tabToggles[0];
    //
    //
    //     tabToggles.forEach((el, index)=>{
    //         let title = el.querySelector('.tab_toggle')
    //         let content = el.querySelector('.item_content')
    //
    //
    //         title.addEventListener('click', ()=>{
    //             if(!el.classList.contains('active')){
    //
    //                 new Promise((resolve, reject) => {
    //                     currentToggles.classList.remove('active')
    //                     resolve('done');
    //                 })
    //
    //                     .then((done)=>{
    //                         APP.gsap.set(content, {
    //                             height: 'auto',
    //                         })
    //                         APP.gsap.from(content, {
    //                             height: 0,
    //                             duration: 1,
    //                             ease: "Power1.easeOut",
    //                             clearProps: 'all',
    //                             onComplete: ()=>{
    //                                 el.classList.add('active')
    //                                 return done;
    //                             }
    //                         })
    //                     })
    //                     .then((done)=>{
    //                         currentToggles = el;
    //                         return done;
    //                     })
    //             }
    //         })
    //
    //     })
    // }





}