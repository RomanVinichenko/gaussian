export class Footer {
    constructor() {
        this.footer = document.querySelector('#footer')

        // if(APP.isPhoneDevice){
        //
        //     this.initTabletFooter()
        // }

    }

    // initTabletFooter(){
    //     const navCol = this.footer.querySelectorAll('.nav_col');
    //
    //     navCol.forEach((item)=>{
    //         let panelTitle = item.querySelector('.nav_title')
    //         let faqContent = item.querySelector('.footer-navbar');
    //
    //         panelTitle.addEventListener('click', ()=>{
    //
    //             item.classList.toggle('open')
    //
    //
    //             if(item.classList.contains('open')){
    //                 APP.gsap.set(faqContent, {
    //                     height: 'auto',
    //                 });
    //                 APP.gsap.from(faqContent, {
    //                     height: 0,
    //                     duration: 0.8,
    //                     ease: "power2.out"
    //                 });
    //             } else {
    //                 APP.gsap.to(faqContent, {
    //                     height: 0,
    //                     duration: 0.8,
    //                     ease: "power2.out"
    //                 });
    //             }
    //
    //
    //
    //         })
    //     })
    //
    // }

}