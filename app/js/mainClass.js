// import videojs from "video.js"
// import tippy from 'tippy.js';


export class mainClass {
    constructor() {
        // this.initContactFrom()
        // this.initAudio()
        // this.initTips()
    }

    initContactFrom(){



    }
    initAudio(){
        window.currentAudio = '';


        document.querySelectorAll(".audio")
            .forEach((audio)=> {

                let btn = audio.querySelector('.audio_init');
                const layer = audio.querySelector('.audio_layer');
                const audioTag = audio.querySelector('audio');
                    btn.addEventListener('click', ()=>{

                        if(window.currentAudio) {
                            videojs(window.currentAudio).pause()
                        }
                        APP.gsap.to(layer, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: ()=>{
                                layer.style.display = 'none'
                            }
                        })

                        const sources = audioTag.querySelector('source')
                        sources.src = sources.dataset.src
                        let audioPlayer = videojs(audioTag);
                        audioPlayer.responsive(true)
                        audioPlayer.play()

                        audioPlayer.on('play', () => {
                            if(window.currentAudio != audioTag){
                                videojs(window.currentAudio).pause()
                            }
                            window.currentAudio = audioTag
                        });
                        window.currentAudio = audioTag
                    })


            });
    }


    initTips(){
        tippy('.tippys', {
            duration: 300,
            arrow: true,
            animation: 'shift-away',
            interactive: true,
            placement: 'bottom',
            theme: 'light',
            content: (reference) => {
                const link = reference.dataset.link;
                const content = reference.dataset.content;
                const linkHtml = '<span>View deal</span>\n' +
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '    <path d="M5 12L19 12" stroke="#9C1F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '    <path d="M12 5L19 12L12 19" stroke="#9C1F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>'


                return `<div>${content}</div> <a href="${link}">${linkHtml}</a>`;


            },
            allowHTML: true,
        });

    }

}