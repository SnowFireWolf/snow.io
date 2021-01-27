<template>
  <div class="home">
        <headerAvator></headerAvator>

        <contact></contact>

        <skill></skill>

        <works></works>

        <z-footer></z-footer>
  </div>
</template>

<script>
// compontents
import headerAvator from '@/components/avator'
import contact from '@/components/contact'
import skill from '@/components/skill'
import works from '@/components/works'
import zFooter from '@/components/footer'


export default {
    data() {
        return {
        }
    },
    components: {
        headerAvator,
        contact,
        skill,
        works,
        zFooter
    },
    mounted() {

        this.scrollReveal().reveal('#header', {
            origin: "bottom",
            distance: "5em",
            delay: 100,
            reset: true,
            easing:'cubic-bezier(0.39, 0.575, 0.565, 1)',
            viewFactor: 0.4
        });
    
        this.scrollReveal().reveal('#contact', {
            origin: "bottom",
            distance: "5em",
            delay: 100,
            reset: true
        });

        this.scrollReveal().reveal('#works', {
            origin: "bottom",
            distance: "5em",
            delay: 100,
            reset: true
        });

        this.scrollReveal().reveal('#footer', {
            delay: 100,
            reset: true,
            beforeReveal: () => {
                this.anime({
                    targets: ".Ynumber",
                    innerHTML: 0,
                    round: 1,
                    easing: "easeInOutExpo"
                })
            },
            afterReveal: () => {
                this.anime({
                    targets: ".Ynumber",
                    innerHTML: 2021,
                    round: 1,
                    easing: "easeInOutExpo"
                })
            }
        });
    }
}
</script>
