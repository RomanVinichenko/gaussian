
export class Support {
    constructor() {
        this.page = document.getElementById('support')
        this.services = this.page.querySelectorAll('.tab_item');
        this.btn =  this.page.querySelectorAll('.tab_toggle');
        this.loadTab();
        this.initTab();
    }

    loadTab(){
        this.btn[0].classList.add('active')
        APP.gsap.set(this.services[0], {
            height: "auto",
        })
        APP.gsap.from(this.services[0], {
            height: 0,
            duration: 0.2,
            ease: "Power4.easeOut",
            onComplete: ()=>{
                this.services[0].classList.add('active')
            }
        })

    }


    initTab(){
        this.btn.forEach((element)=>{
            element.addEventListener('click', (el)=>{
                classActive(this.btn);
                element.classList.add('active');
                let currentList = element.dataset.toggle;
                let Tl = APP.gsap.timeline();
                Tl.to(this.services,{
                    height: 0,
                    duration: 0.2,
                    ease: "Power4.easeOut",
                    onStart: ()=>{
                        this.services.forEach(el=>{
                            el.classList.remove('active')
                        })
                    },
                    onComplete: ()=>{
                        getService(this.services, currentList)
                    }
                })
            })
        })

        function classActive(btn){
            btn.forEach((el)=>{
                el.classList.remove('active')

            });

        }

        function getService(services, val){

            services.forEach( (el)=>{
                if(el.dataset.tab == val){
                    APP.gsap.set(el, {
                        height: "auto",
                    })
                    APP.gsap.from(el, {
                        height: 0,
                        duration: 0.2,
                        ease: "Power4.easeOut",
                        onComplete: ()=>{
                            el.classList.add('active')
                        }
                    })
                }
            })

        }
    }
}