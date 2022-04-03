
import {blockScroll, unblockScroll} from "../utils";

export class Header {
    constructor() {

        // this.initTL()
        //
        // this.loadMobileMenu();
        // this.initSearch();


    }

    initTL(){
        this.mobileNav = document.querySelector('#mobile-nav')
        this.Search = document.querySelector('#head-search')
        this.overlay = this.Search.querySelector('.search_overlay')
        this.SearchForm = this.Search.querySelector('.main_search')
        this.mobileNavT = APP.gsap.timeline(
            {
                paused: true
            })
            .to(this.mobileNav, {
                right: 0,
                ease: "Power1.out",
                duration: 0.3
            })

        this.SearchTL = APP.gsap.timeline({
            paused: true,
            delay: 0.1,
            onReverseComplete: ()=>{
                this.Search.style.zIndex = -2
            },
            onStart: ()=>{
                this.Search.style.zIndex = 12
            }
        })
            .to(this.overlay, {
                top: 0,
                duration: 0.5,
                ease: "power2.out"
            })
            .to(this.SearchForm, {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, ">=0.2")


    }



    loadMobileMenu(){

        this.mobileburger = document.querySelector('#mobileburger')
        const drop = this.mobileNav.querySelectorAll('.menu-item-has-children')
        // console.log(drop)
        drop.forEach((el)=>{
            const toggle = el.querySelector('.dropdown-toggle')
            const nav = el.querySelector('.drop-wrapper')
            toggle.addEventListener('click', ()=>{
                toggle.classList.toggle('open')
                if(!nav.classList.contains('open')){
                    APP.gsap.set(nav, {
                        height: 'auto',
                    });
                    APP.gsap.from(nav, {
                        height: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        clearProps: "all",
                        onStart:()=>{
                            nav.classList.add('open')
                        }
                    });
                } else {
                    APP.gsap.to(nav, {
                        height: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        clearProps: "all",
                        onComplete:()=>{
                            nav.classList.remove('open')
                        }
                    });
                }
            })
        })
        this.mobileburger.addEventListener('click', ()=>{

            if(this.mobileburger.classList.contains('open')){
                this.mobileNavT.reverse()
                this.mobileburger.classList.remove('open')
                unblockScroll()
            } else {
                this.mobileNavT.play()
                this.mobileburger.classList.add('open')
                blockScroll()
            }
        })




    }

    initSearch(){
        const descSearch = document.querySelector('#descSearch')
        const mobSearch =  document.querySelector('#mobSearch')
        const SearchClose = this.Search.querySelector('#close_search')
        const SearchInput = this.Search.querySelector('#s')
        const searchform = this.Search.querySelector('#searchform')

        descSearch.addEventListener('click', ()=>{
            descSearch.classList.toggle('open');
            mobSearch.classList.toggle('open');
            this.SearchTL.play()
            SearchInput.focus()
            blockScroll()
        });

        mobSearch.addEventListener('click', ()=>{
            if(this.mobileburger.classList.contains('open')){
                this.mobileNavT.reverse()
                this.mobileburger.classList.remove('open')
                unblockScroll()
            }
            descSearch.classList.toggle('open');
            mobSearch.classList.toggle('open')
            this.SearchTL.play()
            SearchInput.focus()
            blockScroll()
        });

        SearchClose.addEventListener('click', (e)=>{
            descSearch.classList.toggle('open');
            mobSearch.classList.toggle('open')
            e.preventDefault();
            this.SearchTL.reverse()
            SearchInput.blur()

        })
        // console.log(SearchInput)
        SearchInput.addEventListener('keydown', (e)=>{
            // console.log(e.target.value)
            if(e.target.value != ''){
                if(e.which == 10 || e.which == 13) {
                    searchform.submit();
                }
            }

        })

    }



}