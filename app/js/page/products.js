
export class Products {
    constructor() {
        this.initSection()
    }

    initSection(){
        const sections = APP.gsap.utils.toArray('.panel');

        APP.ScrollTrigger.create({

            trigger: sections[0],
            start: 'top top',
            endTrigger: sections[sections.length - 1],
            end: 'bottom bottom',
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: {min: 0.25, max: 0.75}, // the snap animation should be at least 0.25 seconds, but no more than 0.75 seconds (determined by velocity)
                delay: 0.125, // wait 0.125 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            }

        })

        sections.forEach((el)=>{
            const elTimeline = APP.gsap.timeline({
                paused: true
            })
            const head = el.querySelector('.font_56')
            const description = el.querySelector('.font_14')
            const item = el.querySelectorAll('.item')
            const btns = el.querySelector('.btns')

            elTimeline.to(head, {
                opacity: 1,
                y: 0,
                ease: "Power1.ease",
                duration: 0.5
            })
                .to(description, {
                    opacity: 1,
                    y: 0,
                    ease: "Power1.ease",
                    duration: 0.5
                }, '-=0.3')
                .to(btns, {
                    opacity: 1,
                    y: 0,
                    ease: "Power1.ease",
                    duration: 0.5
                }, '<=1');
            item.forEach((el)=>{
                elTimeline.to(el, {
                    opacity: 1,
                    x: 0,
                    ease: "Power1.ease",
                    duration: 0.5
                }, '-=0.3')
            })

            el.animation = elTimeline

        })

        sections.forEach((panel, i) => {
            APP.ScrollTrigger.create({
                trigger: panel,
                start: "-=1px top",
                end: "bottom bottom",
                markers: true,
                onEnter: ()=>{
                    panel.animation.play()
                }
            });
        });
    }

}